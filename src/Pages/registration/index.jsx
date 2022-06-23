import BaseLayout from "../../Layouts/BaseLayout";

const CitizenRegistration = () =>{
    return (
        <BaseLayout>
           <section className={'h-full space-y-10 pt-8 px-20'}>
               <div className={'text-secondary font-semibold text-lg'}>
                   Citizen Registration
               </div>

               <div className={'border-[1px] border-secondary/20 rounded-xl p-6  relative'}>
                   <p className={'absolute -top-3 ml-4 bg-accent2/95 text-sm font-bold px-2 text-secondary'}> Basic Info</p>

                   <form action="" className={'grid grid-cols-3 gap-x-5 gap-y-8 text-secondary '}>
                        <div className={'flex flex-col space-y-3 '}>
                            <label htmlFor="" className={'text-sm'}>First Name</label>
                            <input type="text" className={'rounded-md outline-none text-sm bg-secondary/10 p-3'}/>
                        </div>

                       <div className={'flex flex-col space-y-3 '}>
                           <label htmlFor="" className={'text-sm'}>Middle Name</label>
                           <input type="text" className={'rounded-md outline-none text-sm bg-secondary/10 p-3'}/>
                       </div>

                       <div className={'flex flex-col space-y-3 '}>
                           <label htmlFor="" className={'text-sm'}>Last Name</label>
                           <input type="text" className={'rounded-md outline-none text-sm bg-secondary/10 p-3'}/>
                       </div>

                       <div className={'flex flex-col space-y-3 '}>
                           <label htmlFor="" className={'text-sm'}>Birth Date</label>
                           <input type="date" className={'rounded-md outline-none text-sm bg-secondary/10 p-3'}/>
                       </div>

                       <div className={'flex flex-col space-y-3 '}>
                           <label htmlFor="" className={'text-sm'}>Religion Name</label>
                           <select className={'rounded-md outline-none capitalize text-sm bg-secondary/10 p-3'}>
                               <option value="">christian</option>
                               <option value="">christian</option>
                               <option value="">christian</option>
                           </select>
                       </div>

                       <div className={'flex flex-col space-y-3 '}>
                           <label htmlFor="" className={'text-sm'}>Gender</label>
                           <select className={'rounded-md outline-none capitalize text-sm bg-secondary/10 p-3'}>
                               <option value="">Male</option>
                               <option value="">Female</option>
                           </select>
                       </div>

                       <div className={'flex flex-col space-y-3 '}>
                           <label htmlFor="" className={'text-sm'}>Disability</label>
                           <select className={'rounded-md outline-none capitalize text-sm bg-secondary/10 p-3'}>
                               <option value="">Male</option>
                               <option value="">Female</option>
                           </select>
                       </div>

                       <div className={'flex flex-col space-y-3 '}>
                           <label htmlFor="" className={'text-sm'}>Region</label>
                           <input type="text" className={'rounded-md outline-none text-sm bg-secondary/10 p-3'}/>
                       </div>

                       <div className={'flex flex-col space-y-3 '}>
                           <label htmlFor="" className={'text-sm'}>District</label>
                           <input type="text" className={'rounded-md outline-none text-sm bg-secondary/10 p-3'}/>
                       </div>

                       <div className={'flex flex-col space-y-3 '}>
                           <label htmlFor="" className={'text-sm tracking-wide'}>Village/Street</label>
                           <input type="text" className={'rounded-md outline-none text-sm bg-secondary/10 p-3'}/>
                       </div>

                       <div className={'flex flex-col space-y-3 '}>
                           <label htmlFor="" className={'text-sm'}>House Number</label>
                           <input type="text" className={'rounded-md outline-none text-sm bg-secondary/10 p-3'}/>
                       </div>

                       <div className={'flex flex-col space-y-3 '}>
                           <label htmlFor="" className={'text-sm'}>Title</label>
                           <input type="text" className={'rounded-md outline-none text-sm bg-secondary/10 p-3'}/>
                       </div>

                   </form>
               </div>

           </section>
        </BaseLayout>
    )
}
export default CitizenRegistration;