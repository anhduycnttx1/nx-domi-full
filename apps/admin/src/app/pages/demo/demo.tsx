/* eslint-disable-next-line */
export interface DemoPageProps {
  title: string
}

export function DemoPage(props: DemoPageProps) {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

export default DemoPage
