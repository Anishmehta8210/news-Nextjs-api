
import { Sidebar } from './component/Sidebar';
import NewsCart from './component/NewsCart';


const page = async () => {
  let callingNews = await fetch(process.env.DOMAIN +"post",{cache:"no-store"});
  callingNews = await callingNews.json();

  return (
    <div className='flex'>
        <div className='w-2/12 bg-slate-200 h-[93vh]'>
            <Sidebar/>
        </div>
        <div className='w-10/12 bg-sky-50 p-5 flex flex-col gap-2'>
            {callingNews.data.map((value, key) => (<NewsCart value={value} key={key} read={true}/>))}
        </div>
    </div>
  )
}

export default page