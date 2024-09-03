
const page = ({params}:{params:{blogid:string}}) => {
  return (
    <>
    <div>{params.blogid}</div>
    <h1>Here is your vlog</h1>
    </>
  )
}

export default page