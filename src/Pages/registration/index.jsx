import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";


import BaseLayout from "../../Layouts/BaseLayout";
import {useForm} from "react-hook-form";
import {useState, useRef} from "react"
import {Input, Option, Select} from "../../components/form-control";
import {useMutation, useQuery} from "react-query";
import {fetchHouses, registerCitizen} from "../../provider/api";
import {Link} from "react-router-dom";
import Button from "../../components/Button";

export const FieldWrapper = ({children, className}) =>{
    return (
        <div className={`flex flex-col text-skin-base space-y-3 ${className}`}>
            {children}
        </div>
    )
}

const CitizenRegistration = () =>{

    const validationSchema = Yup.object({
      firstName: Yup.string().required("first name is required"),
      middleName: Yup.string().required("middle name is required"),
      lastName: Yup.string().required("last name is required"),
      disability: Yup.string().required("this field is required"),
        dob: Yup.string().required("this field is required"),
      religion: Yup.string().required("this field is required"),
      gender: Yup.string().required("this field is required"),
      region: Yup.string().required("this field is required"),
      district: Yup.string().required("this field is required"),
      street: Yup.string().required("this field is required"),
      house: Yup.string().required("this field is required"),

    });
    const [housesList, setHousesList] = useState([]);

    useQuery('houses-list', fetchHouses, {
        onSuccess:(res) => {
            setHousesList(res.data)
        }
    })

    const [age, setAge] = useState(0)
    const citizenUrl = useRef(null);

    const {handleSubmit, register, formState:{errors}} = useForm({
        resolver:yupResolver(validationSchema)
    })
    const [isChildren, setIsChildren] = useState(true)

    console.log("ERROR", errors)

    const onSuccess = () =>{
        citizenUrl.current && citizenUrl.current.click();
    }

    const {mutate, isLoading:isRegistering} =  useMutation(registerCitizen,  {
        onSuccess,
    })

    const onSubmit = (formData) => {
        mutate({...formData, age:age})
        console.log("added successfully..")
    }

    console.log()

    const calculateAge = (birth_date) =>{
        const today = new Date();
        let birthDate = new Date(birth_date);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
        {
            age--;
        }

        age >= 18 && setIsChildren(false);
        age < 18 && setIsChildren(true);
        setAge(age)
    }

    return (
        <BaseLayout>
           <form onSubmit={handleSubmit(onSubmit)} className={'h-full space-y-10 pt-8 px-20'}>
               <div className={'text-skin-base  font-semibold text-lg'}>
                   <p>Citizen Registration</p>
                   <p className={'text-sm font-light opacity-80'}>Click <a className={'text-blue-500'} href="/pdf/citizen-reg-form.pdf" download target={"_blank"}>here</a> to download registration form </p>
               </div>

               <Link ref={citizenUrl} to={'/citizens'} className={"hidden"}></Link>

               <div className={'border-[1px] border-secondary/20 rounded-xl p-6  relative'}>
                   <p className={'absolute -top-3 ml-4 bg-skin-primary text-skin-base text-sm font-bold px-2 '}> Basic Info</p>

                   <div className={'grid grid-cols-3 gap-x-5 gap-y-8 text-secondary '}>

                       <FieldWrapper>
                           <Input
                               register={register}
                               name={"firstName"}
                               label={'First Name'}/>
                       </FieldWrapper>

                       <FieldWrapper>
                           <Input
                               register={register}
                               name={"middleName"}
                               label={'Middle Name'}/>
                       </FieldWrapper>

                       <FieldWrapper>
                           <Input
                               register={register}
                               name={"lastName"}
                               label={'Last Name'}/>
                       </FieldWrapper>

                       <FieldWrapper>
                           <Input
                               onChange={calculateAge}
                               register={register}
                               type={'date'}
                               name={"dob"}
                               label={'Birth Date'}/>
                       </FieldWrapper>


                       <FieldWrapper>
                           <Select {...register('religion')} label={'religion'}>
                               <Option value={'christian'} />
                               <Option value={'muslim'} />
                               <Option value={'other'} />
                           </Select>
                       </FieldWrapper>

                       <FieldWrapper>
                           <Select {...register('gender')} label={'gender'}>
                               <Option value={'M'} text={'Male'}/>
                               <Option value={'F'} text={'Female'}/>
                           </Select>
                       </FieldWrapper>



                       <FieldWrapper>
                           <Select {...register('disability')} label={'disability'}>
                               <Option value={'none'} />
                               <Option value={'vision Impairment'} />
                               <Option value={'vision Impairment'} />
                               <Option value={'deaf or hard of hearing'} />
                               <Option value={'mental health conditions'} />
                               <Option value={'intellectual disability'} />
                               <Option value={'acquired brain injury'} />
                               <Option value={'autism spectrum disorder'} />
                               <Option value={'physical disability'} />
                           </Select>
                       </FieldWrapper>

                       <FieldWrapper>
                           <Input
                               register={register}
                               name={"region"}
                               label={'Region'}/>
                       </FieldWrapper>

                       <FieldWrapper>
                           <Input
                               register={register}
                               name={"district"}
                               label={'district'}/>
                       </FieldWrapper>

                       <FieldWrapper>
                           <Input
                               register={register}
                               name={"street"}
                               label={'street'}/>
                       </FieldWrapper>


                       <FieldWrapper>
                           <Select {...register('house')} label={'house number'}>
                               {housesList.map((house) => (
                                   <Option value={house?._id} text={house?.identificationNumber}/>
                               ))}
                           </Select>
                       </FieldWrapper>


                   </div>
               </div>

               {!isChildren && (
                   <div className={'border-[1px] border-secondary/20 rounded-xl p-6  relative'}>
                       <p className={'absolute -top-3 ml-4  bg-skin-primary text-skin-base text-sm font-bold px-2 '}>
                           Other Info
                       </p>

                       <div className={'grid grid-cols-3 gap-x-5 gap-y-8 text-secondary '}>

                           <FieldWrapper>
                               <Input
                                   register={register}
                                   name={"phone_number"}
                                   label={'phone number'}/>
                           </FieldWrapper>

                           <FieldWrapper>
                               <Input
                                   register={register}
                                   name={"email"}
                                   label={"email"}/>
                           </FieldWrapper>

                           <FieldWrapper>
                               <Input
                                   register={register}
                                   name={"title"}
                                   label={'title'}/>
                           </FieldWrapper>


                           <FieldWrapper>
                               <Select {...register('marital_status')} label={'Marital Status'}>
                                   <Option value={'married'} />
                                   <Option value={'widowed'} />
                                   <Option value={'separated'} />
                                   <Option value={'divorced'} />
                                   <Option value={'single'} />
                               </Select>
                           </FieldWrapper>

                       </div>

                   </div>
               )}

               <div className={'pb-20'}>
                   <Button type={'submit'} loading={isRegistering} type={'submit'} className={'bg-accent4 px-6 py-3 text-xs uppercase rounded text-white '}>
                       submit
                   </Button>
               </div>
           </form>
        </BaseLayout>
    )
}
export default CitizenRegistration;