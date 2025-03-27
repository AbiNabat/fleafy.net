import ThemeToggle from "@/components/shared/theme-toggle";
import {Button} from "@/components/ui/button";
import {UserButton} from "@clerk/nextjs";

export default function Home() {
  return (


      <div className='w-full  p-5'>
          <div className='flex gap-x-5 justify-end'>
              <UserButton/>
              <ThemeToggle/>
          </div>

          <h1 className='text-blue-500 font-bold'> Welcome to the shop</h1>
          <Button>Click Here</Button>

      </div>



  );
}
