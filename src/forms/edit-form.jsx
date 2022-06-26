import BaseLayout from "../Layouts/BaseLayout";
import {FieldWrapper} from "../Pages/registration";
import {Link, useParams} from "react-router-dom";
import {Input, Option, Select} from "../components/form-control";
import {useRef, useState} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import * as Yup from "yup";
import {useMutation, useQuery} from "react-query";
import {fetchHouses, getCitizenDetails, updateCitizen} from "../provider/api";
import {formatDate, getAge} from "../utils";
import Button from "../components/Button";

const EditForm = () => {
    const {citizenId} = useParams();
    const detailsRef = useRef(null)
    const [citizen, setCitizen] = useState();
    const {isLoading} = useQuery([`citizen-${citizenId}`, citizenId], getCitizenDetails, {
        onSuccess: (res) => {
            setCitizen(res.data)
        }
    })

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
    const {handleSubmit, register,} = useForm({
        resolver: yupResolver(validationSchema)
    })


    const calculateAge = (birth_date) => {
        const today = new Date();
        let birthDate = new Date(birth_date);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        setAge(age)
    }

    const [housesList, setHousesList] = useState([]);

    useQuery('houses-list', fetchHouses, {
        onSuccess:(res) => {
            setHousesList(res.data)
        }
    })

    const {mutate, isLoading:isUpdating} = useMutation(updateCitizen, {
        onSuccess: () => {
            console.log("updated successfully..")
            detailsRef.current && detailsRef.current.click();
        }
    })

    const [age, setAge] = useState(citizen ? citizen.age : 0)



    const onSubmit = (formData) => {
        // console.log(formData);
        mutate({...formData, age, id:citizenId})
    }

    if(isLoading){
        return <p>loading</p>
    }

    return (
        <BaseLayout>
            {citizen && (
                <form onSubmit={handleSubmit(onSubmit)} className={'h-full space-y-10 pt-8 px-20'}>
                    <div className={'text-secondary font-semibold text-lg'}>
                        Update Citizen
                    </div>

                    <div className={'border-[1px] border-secondary/20 rounded-xl p-6  relative'}>
                        <p className={'absolute -top-3 ml-4 bg-accent2/95 text-sm font-bold px-2 text-secondary'}> Basic
                            Info</p>

                        <div className={'grid grid-cols-3 gap-x-5 gap-y-8 text-secondary '}>

                            <FieldWrapper>
                                <Input
                                    defaultValue={citizen.firstName}
                                    register={register}
                                    name={"firstName"}
                                    label={'First Name'}/>
                            </FieldWrapper>

                            <FieldWrapper>
                                <Input
                                    defaultValue={citizen.middleName}
                                    register={register}
                                    name={"middleName"}
                                    label={'Middle Name'}/>
                            </FieldWrapper>

                            <FieldWrapper>
                                <Input
                                    defaultValue={citizen.lastName}
                                    register={register}
                                    name={"lastName"}
                                    label={'Last Name'}/>
                            </FieldWrapper>

                            <FieldWrapper>
                                <Input
                                    defaultValue={`${formatDate(citizen.dob)}`}
                                    onChange={calculateAge}
                                    register={register}
                                    type={'date'}
                                    name={"dob"}
                                    label={'Birth Date'}/>
                            </FieldWrapper>


                            <FieldWrapper>
                                <Select defautlValue={citizen.religion}  {...register('religion')} label={'religion'}>
                                    <Option value={'christian'}/>
                                    <Option value={'muslim'}/>
                                    <Option value={'other'}/>
                                </Select>
                            </FieldWrapper>

                            <FieldWrapper>
                                <Select defautlValue={citizen.gender}  {...register('gender')} label={'gender'}>
                                    <Option value={'male'}/>
                                    <Option value={'female'}/>
                                </Select>
                            </FieldWrapper>


                            <FieldWrapper>
                                <Select defautlValue={citizen.disability} {...register('disability')} label={'disability'}>
                                    <Option value={'none'}/>
                                    <Option value={'vision Impairment'}/>
                                    <Option value={'vision Impairment'}/>
                                    <Option value={'deaf or hard of hearing'}/>
                                    <Option value={'mental health conditions'}/>
                                    <Option value={'intellectual disability'}/>
                                    <Option value={'acquired brain injury'}/>
                                    <Option value={'autism spectrum disorder'}/>
                                    <Option value={'physical disability'}/>
                                </Select>
                            </FieldWrapper>

                            <FieldWrapper>
                                <Input
                                    defaultValue={citizen.region}
                                    register={register}
                                    name={"region"}
                                    label={'Region'}/>
                            </FieldWrapper>

                            <FieldWrapper>
                                <Input
                                    defaultValue={citizen.district}
                                    register={register}
                                    name={"district"}
                                    label={'district'}/>
                            </FieldWrapper>

                            <FieldWrapper>
                                <Input
                                    defaultValue={citizen.street}
                                    register={register}
                                    name={"street"}
                                    label={'street'}/>
                            </FieldWrapper>

                            <FieldWrapper>
                                <Select defautlValue={`${citizen.house?._id.toLowerCase()}`} {...register('house')} label={'house number'}>
                                    {housesList.map((house) => (
                                        <Option value={`${house?._id.toLowerCase()}`} text={house?.identificationNumber}/>
                                    ))}
                                </Select>
                            </FieldWrapper>
                            <Link ref={detailsRef} to={'/citizen/' + citizen._id} className={"hidden"} >goo</Link>

                        </div>
                    </div>

                    {getAge(citizen.dob) >= 15 && (
                        <div className={'border-[1px] border-secondary/20 rounded-xl p-6  relative'}>
                            <p className={'absolute -top-3 ml-4 bg-accent2/95 text-sm font-bold px-2 text-secondary'}>
                                Other Info
                            </p>

                            <div className={'grid grid-cols-3 gap-x-5 gap-y-8 text-secondary '}>

                                <FieldWrapper>
                                    <Input
                                        defaultValue={citizen.phoneNumber}
                                        register={register}
                                        name={"phoneNumber"}
                                        label={'phone number'}/>
                                </FieldWrapper>

                                <FieldWrapper>
                                    <Input
                                        defaultValue={citizen.email}
                                        register={register}
                                        name={"email"}
                                        label={"email"}/>
                                </FieldWrapper>

                                <FieldWrapper>
                                    <Input
                                        defaultValue={citizen.title}
                                        register={register}
                                        name={"title"}
                                        label={'title'}/>
                                </FieldWrapper>


                                <FieldWrapper>
                                    <Select defautlValue={citizen.maritalStatus.toLowerCase()}
                                            {...register('maritalStatus')} label={'Marital Status'}>
                                        <Option value={'married'}/>
                                        <Option value={'widowed'}/>
                                        <Option value={'separated'}/>
                                        <Option value={'divorced'}/>
                                        <Option value={'single'}/>
                                    </Select>
                                </FieldWrapper>

                            </div>

                        </div>
                    )}

                    <div className={'pb-20'}>
                        <Button type={'submit'} loading={isUpdating} className={'bg-blue-500 border-blue-500'} >Update</Button>
                    </div>
                </form>
            )}
        </BaseLayout>
    )
}
export default EditForm;