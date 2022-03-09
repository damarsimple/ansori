import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { useState } from 'react'
import create from 'zustand'

interface ConfirmModalState {
  show: boolean
  setShow: (show: boolean) => void
  title: string
  setTitle: (title: string) => void
  content: string
  setContent: (content: string) => void
  next?: () => void
  setNext: (cb?: () => void) => void
}

export const useConfirmModalStore = create<ConfirmModalState>((set) => ({
  show: false,
  setShow: (show) => set({ show }),
  title: '',
  setTitle: (title) => set({ title }),
  content: '',
  setContent: (content) => set({ content }),
  next: undefined,
  setNext: (next) => set({ next }),
}))

export default function ConfirmModal() {
  const {
    show,
    title,
    content,
    setShow,
    setContent,
    setTitle,
    next,
    setNext,
  } = useConfirmModalStore()

  const handleClose = () => {
    setShow(false)
    setContent('')
    setTitle('')
    setNext(undefined)
  }

  return (
    <div>
      <Modal
        open={show}
        onClose={handleClose}
        aria-labelledby={title}
        aria-describedby={content}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id={title} variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id={content} sx={{ mt: 2 }}>
            {content}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'flex-end',
            }}
          >
            <Button
              onClick={() => {
                handleClose()
              }}
            >
              Batal
            </Button>
            <Button
              onClick={() => {
                if (next) {
                  next()
                  handleClose()
                }
              }}
              variant="contained"
            >
              Lanjut
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}
