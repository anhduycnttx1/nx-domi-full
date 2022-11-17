import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

type DraggableProps = {
  children?: React.ReactNode
  id: string
}

export default function Draggable(props: DraggableProps) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.id })
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }
  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </div>
  )
}
