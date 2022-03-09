import React from 'react'
import { useConfirmModalStore } from '../components/ConfirmModal'

export default function useConfirmModal() {
  const { setShow, setContent, setTitle, setNext } = useConfirmModalStore()

  return {
    cancel: () => {
      setShow(false)
      setContent('')
      setTitle('')
      setNext(undefined)
    },
    call: ({
      content,
      title,
      next,
    }: {
      content: string
      title: string
      next: () => void
    }) => {
      setContent(content)
      setTitle(title)
      setNext(next)
      setShow(true)
    },
  }
}
