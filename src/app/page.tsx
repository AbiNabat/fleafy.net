import ThemeToggle from "@/components/shared/theme-toggle";
import {Button} from "@/components/ui/button";

export default function Home() {
  return (
   <div className='p-5'>

       <div className='w-100 flex justify-end items-end'>
           <ThemeToggle/>
       </div>
       <h1 className='text-blue-500 font-bold'> Welcome to the shop</h1>
       <Button>Click Here</Button>

   </div>


  );
}
