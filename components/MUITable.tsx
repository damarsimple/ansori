import { Edit, RemoveRedEye } from "@mui/icons-material";
import {
  Paper,
  Box,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  IconButton,
  TablePagination,
  Typography,
  TextField,
  Button,
  Modal,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import get from "lodash/get";
import { tooltipClasses, TooltipProps } from "@mui/material/Tooltip";
import { alpha, styled } from "@mui/material/styles";
import TableHead from "@mui/material/TableHead";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import { visuallyHidden } from "@mui/utils";
import { toast } from "react-toastify";
import { DocumentNode, gql, useMutation, useQuery } from "@apollo/client";
import { client } from "../modules/client";
import { useRouter } from "next/router";
import { money } from "../utils";
import { useForm } from "react-hook-form";
import { DropZone } from "./Dropzone";

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));
interface BaseModel {
  id: number;
}

type Action = "edit" | "delete" | "create";

interface HeadCell<T> {
  disablePadding?: boolean;
  name: keyof T | Leaves<T, 3>;
  label: string;
  numeric?: boolean;
  formatter?: "currency" | "function";
  formatterFunction?: (e: T) => string;
}

type EditCellRender = "edit" | "create";
interface EditCell<T> {
  name: keyof T;
  label: string;
  formatterFunction?: (e: T) => string;
  type?: "text" | "number" | "date" | "select" | "file";
  selects?: string[];
  renderOn?: EditCellRender[];
  required?: boolean;
  formatter?: (e: string | number) => string | number;
}

interface MutationModifier<T> {
  create?: (e: T) => T;
  edit?: (e: T) => T;
}
interface TableProp<T> {
  fields: HeadCell<T>[];
  editFields?: EditCell<T>[];
  createFields?: EditCell<T>[];
  mutationModifier?: MutationModifier<T>;
  action?: Action[];
  name: string;
  deleteQuery?: DocumentNode;
  createQuery?: DocumentNode;
  editQuery?: DocumentNode;
  query: DocumentNode;
  countQuery: DocumentNode;
  keys: string;
  countKeys: string;
  TooltipChildren?: (row: T) => React.ReactNode;
  onEdit?: (row: T) => void;
  disableSelection?: boolean;
}

export default function MUITable<T extends BaseModel>({
  fields,
  name,
  createQuery,
  editQuery,
  deleteQuery,
  action,
  query,
  keys,
  TooltipChildren,
  countQuery,
  countKeys,
  onEdit,
  disableSelection,
  editFields,
  createFields,
  mutationModifier,
}: TableProp<T>) {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<string>("id");
  const [selected, setSelected] = useState<readonly number[]>([]);

  const handleRequestSort = (
    _: React.MouseEvent<unknown>,
    property: string
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: number) => {
    if (disableSelection) return;

    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name: number) => selected.indexOf(name) !== -1;

  const handleSelectedDelete = () => {
    toast.info(`${selected.length} ${name.toLowerCase()}s will be deleted`);

    deleteQuery &&
      client
        .mutate({
          mutation: deleteQuery,
          variables: {
            where: {
              id: {
                in: selected,
              },
            },
          },
        })
        .then((e) => {
          setSelected([]);
          refetch();
        });
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [search, setSearch] = useState("");
  const { data, loading, error, refetch } = useQuery(query, {
    variables: {
      where: {
        ...(search.length !== 0 && {
          name: {
            contains: search,
            mode: "insensitive",
          },
        }),
      },
      take: rowsPerPage,
      skip: page * rowsPerPage,
      orderBy: [
        {
          [orderBy]: order,
        },
      ],
    },
  });

  const handleSearch = (e: string) => {
    setSearch(e);
  };

  const { data: cc } = useQuery(countQuery);

  const rows: T[] = get(data, keys, []);
  const count: number = get(cc, countKeys, 0);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const formatter = (e: HeadCell<T>, row: T) => {
    const val = get(row, e.name);

    if (e.formatter == "function" && e.formatterFunction) {
      return e.formatterFunction(row);
    }

    if (typeof e.formatter == "string") {
      switch (e.formatter) {
        case "currency":
          //@ts-ignore
          return money.format(typeof val == "string" ? parseInt(val) : val);
        default:
          return row[e.name];
      }
    }

    return val;
  };

  const [editTarget, setEditTarget] = useState<null | T>(null);
  const [mutateModal, setMutateModal] = useState<"edit" | "create" | "">("");

  const hideModal = () => setMutateModal("");

  const handleCreate = (createTarget: T) => {
    createQuery &&
      client
        .mutate({
          mutation: createQuery,
          variables: {
            data: mutationModifier?.create
              ? mutationModifier.create(createTarget)
              : createTarget,
          },
        })
        .then((e) => {
          refetch();
          toast.success("Berhasil membuat data");
          hideModal();
        })
        .catch((e) => toast.error("Gagal membuat data"));
  };

  const handleEdit = (e: T) => {
    const data = mutationModifier?.edit ? mutationModifier.edit(e) : e;

    const remap = {};

    const ignores = ["__typename", "id"];

    if (!editTarget) return;

    for (const key in data) {
      if (ignores.includes(key)) continue;
      //@ts-ignore
      remap[key as string] = {
        //@ts-ignore
        set: data[key],
      };
    }

    editQuery &&
      client
        .mutate({
          mutation: editQuery,
          variables: {
            where: {
              id: editTarget.id,
            },
            data: remap,
          },
        })
        .then((e) => {
          refetch();
          toast.success("Berhasil membuat data");
          hideModal();
        })
        .catch((e) => toast.error("Gagal membuat data"));
  };

  const currentFields = mutateModal == "edit" ? editFields : createFields;

  return (
    <Paper sx={{ p: 1 }}>
      <Modal open={mutateModal !== ""} onClose={hideModal}>
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Box display="flex" justifyContent={"flex-end"}>
            <Button onClick={hideModal}>x</Button>
          </Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {mutateModal === "edit" ? "Edit" : "Create"} {name}
          </Typography>

          {currentFields && (
            <MutationForm
              //@ts-ignore
              fields={currentFields}
              defaultValues={mutateModal == "edit" ? editTarget : {}}
              onSubmit={mutateModal === "edit" ? handleEdit : handleCreate}
            />
          )}
        </Box>
      </Modal>

      {action?.includes("create") && (
        <Button
          fullWidth
          variant="contained"
          onClick={() => setMutateModal("create")}
        >
          Buat {name}
        </Button>
      )}
      <Box sx={{ width: "100%" }}>
        <EnhancedTableToolbar
          numSelected={selected.length}
          handleSelectedDelete={handleSelectedDelete}
          name={name}
          handleSearch={handleSearch}
        />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"small"}
          >
            <EnhancedTableHead<T>
              fields={fields}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy as string}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              name={name}
              action={action}
              disableSelection={disableSelection}
            />
            <TableBody>
              {rows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <HtmlTooltip
                    key={row.id}
                    title={
                      <React.Fragment>
                        {TooltipChildren && TooltipChildren(row)}
                      </React.Fragment>
                    }
                  >
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      selected={isItemSelected}
                    >
                      <TableCell
                        padding="checkbox"
                        onClick={(event) => handleClick(event, row.id)}
                      >
                        {!disableSelection && (
                          <Checkbox color="primary" checked={isItemSelected} />
                        )}
                      </TableCell>

                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        onClick={(event) => handleClick(event, row.id)}
                      >
                        {row.id}
                      </TableCell>
                      {fields.map((headcell) => (
                        <TableCell
                          onClick={(event) => handleClick(event, row.id)}
                          component="th"
                          scope="row"
                          key={`${row.id}`}
                        >
                          {formatter(headcell, row)}
                        </TableCell>
                      ))}

                      {action && (
                        <TableCell component="th" id={labelId} scope="row">
                          {action.includes("edit") && (
                            <IconButton
                              onClick={() => {
                                if (onEdit) {
                                  onEdit(row);
                                } else {
                                  setMutateModal("edit");
                                  setEditTarget(row);
                                }
                              }}
                            >
                              <Edit />
                            </IconButton>
                          )}
                        </TableCell>
                      )}
                    </TableRow>
                  </HtmlTooltip>
                );
              })}
              {loading && (
                <TableRow
                  style={{
                    height: 33 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[25, 50, 100]}
          component="div"
          count={count}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </Paper>
  );
}

type Order = "asc" | "desc";

interface EnhancedTableProps<T> {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
  fields: HeadCell<T>[];
  name: string;
  action?: Action[];
  disableSelection?: boolean;
}

function EnhancedTableHead<T extends BaseModel>(props: EnhancedTableProps<T>) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    fields,
    name,
    action,
    disableSelection,
  } = props;
  const createSortHandler =
    (property: string) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          {!disableSelection && (
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                "aria-label": `select all ${name.toLocaleLowerCase()}s`,
              }}
            />
          )}
        </TableCell>
        {[
          {
            name: "id",
            label: "ID",
            numeric: true,
            disablePadding: true,
          },
          ...fields,
        ].map((headCell, index) => (
          <TableCell
            key={`headcell-${index}`}
            sortDirection={orderBy === headCell.name ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.name}
              direction={orderBy === headCell.name ? order : "asc"}
              onClick={createSortHandler(`${headCell.name}`)}
            >
              {headCell.label}
              {orderBy === headCell.name ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        {action && <TableCell>Aksi</TableCell>}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
  handleSelectedDelete: () => void;
  handleSearch: (e: string) => void;
  name: string;
}

const EnhancedTableToolbar = ({
  numSelected,
  name,
  handleSearch,
  handleSelectedDelete,
}: EnhancedTableToolbarProps) => {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          {name}
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton onClick={handleSelectedDelete}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <TextField
          placeholder="Search"
          size="small"
          onChange={(e) => handleSearch(e.target.value)}
        />
      )}
    </Toolbar>
  );
};

interface MutationFormProp<T> {
  fields: EditCell<T>[];
  defaultValues: any;
  onSubmit: (values: T) => void;
}

function MutationForm<T>({
  defaultValues,
  onSubmit,
  fields,
}: MutationFormProp<T>) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    getValues,
  } = useForm<T>({
    defaultValues,
  });

  const [fileMap, setfileMap] = useState<Record<string, string>>({});

  //@ts-ignore
  const formSubmit = handleSubmit((e) => onSubmit({ ...e, ...fileMap }));

  const [uploadFile] = useMutation<{ uploadFile: String }>(gql`
    mutation UploadFile($file: Upload) {
      uploadFile(file: $file)
    }
  `);

  const uploadHandler = async (key: string, file: File) => {
    try {
      const { data: ulData } = await uploadFile({
        variables: { file },
      });
      //@ts-ignore
      setfileMap({
        ...fileMap,
        [key]: `${process.env.NEXT_PUBLIC_ASSET_ENDPOINT}${ulData?.uploadFile}`,
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Box
      sx={{ display: "flex", gap: 3, flexDirection: "column" }}
      component="form"
      onSubmit={formSubmit}
      autoComplete="off"
    >
      {fields.map((e) => {
        switch (e.type) {
          case "select":
            return (
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{e.label}</InputLabel>
                <Select
                  label={e.label}
                  variant="standard"
                  //@ts-ignore
                  {...register(e.name)}
                >
                  {e.selects?.map((e) => (
                    <MenuItem key={e} value={e}>
                      {e}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            );

          case "file":
            return (
              <DropZone
                title={e.label}
                onFile={(file) => {
                  uploadHandler(`${e.name}`, file);
                }}
                height={150}
              />
            );
            break;
        }

        return (
          <TextField
            fullWidth
            key={e.label}
            type={e.type}
            label={e.label}
            //@ts-ignore
            error={errors[`${e.name}`] !== undefined}
            //@ts-ignore
            helperText={errors[`${e.name}`]?.message}
            //@ts-ignore
            {...register(`${e.name}`, { ...e })}
          />
        );
      })}
      <Button type="submit" fullWidth>
        Masukkan
      </Button>
    </Box>
  );
}

// https://stackoverflow.com/questions/58434389/typescript-deep-keyof-of-a-nested-object

type Prev = [
  never,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  ...0[]
];

type Paths<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? {
      [K in keyof T]-?: K extends string | number
        ? `${K}` | Join<K, Paths<T[K], Prev[D]>>
        : never;
    }[keyof T]
  : "";

type Leaves<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: Join<K, Leaves<T[K], Prev[D]>> }[keyof T]
  : "";

type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${"" extends P ? "" : "."}${P}`
    : never
  : never;
