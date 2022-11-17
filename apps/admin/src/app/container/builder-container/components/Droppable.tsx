import React from 'react'
import { useDroppable } from '@dnd-kit/core'

type DroppableProps = {
  children?: React.ReactNode
  id: string
}

export default function Droppable(props: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  })

  const style = {}

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  )
}
