import LeftMenu from "@/components/leftMenu/LeftMenu"

const Homepage = () => {
  return (
    <div className='flex gap-6 pt-6'>
      <div className="hidden xl:block w-[20%]">
      <LeftMenu type="home" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div>stories</div>
        <div>add post</div>
        <div>feed</div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <div>right menu</div>
      </div>
    </div>
  )
}

export default Homepage