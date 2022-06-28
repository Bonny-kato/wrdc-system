import {FieldWrapper} from "../registration";
import {Input, Option, Select} from "../../components/form-control";
import SpinLoader from "../../components/SpinLoader";
import * as Yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";

const RegistrationForm = ({onSubmit, isRegistering, setIsOpen}) => {
    const validationSchema = Yup.object({
        houseNumber: Yup.string().required("first name is required"),
        ownerFullName: Yup.string().required("middle name is required"),
        ownerPhone: Yup.string().required("last name is required"),
        ownerEmail: Yup.string().email('Invalid email'),
        ownerGender: Yup.string().required("this field is required"),
    });

    const {handleSubmit, register} = useForm({
        resolver: yupResolver(validationSchema),
    })
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={'w-1/2 space-y-5 bg-skin-secondary shadow-base p-6 rounded-xl'}>
            <p className={'text-xl font-semibold text-skin-base'}>House Registration Form</p>
            <div className={'grid grid-cols-2 gap-4 pt-5'}>
                <FieldWrapper>
                    <Input
                        register={register}
                        label={'house number'}
                        name={'houseNumber'}/>
                </FieldWrapper>

                <FieldWrapper>
                    <Input
                        register={register}
                        label={'house owner'}
                        name={'ownerFullName'}/>
                </FieldWrapper>

                <FieldWrapper>
                    <Input
                        register={register}
                        label={'owner phone number'}
                        name={'ownerPhone'}/>
                </FieldWrapper>

                <FieldWrapper>
                    <Input
                        required={false}
                        register={register}
                        label={'owner email'}
                        name={'ownerEmail'}/>
                </FieldWrapper>

                <FieldWrapper>
                    <Select
                        {...register('ownerGender')}
                        label={'gender'}
                    >
                        <Option value={'M'} text={'Male'}/>
                        <Option value={'F'} text={'Female'}/>
                    </Select>
                </FieldWrapper>
            </div>

            <div className={'space-x-4 flex justify-end  pt-5'}>

                <button
                    onClick={() => setIsOpen(false)} style={{appearance: 'none'}}
                    className={`px-4  min-w-[96px] focus:ring-2 
                                border-[1.5px] border-red-500 hover:bg-red-500
                                hover:border-red-600 hover:text-white text-sm text-red-500  py-2 rounded`
                    }>
                    Cancel
                </button>
                <button type={'submit'} style={{appearance: 'none'}}
                        className={`px-4  min-w-[96px]
                                     focus:ring-2  text-sm bg-accent4  enable-transition 
                                     text-white border-[1.5px] border-accent4
                                     py-2 rounded`
                        }>
                    {!isRegistering && <p>Create</p>}
                    {isRegistering && (
                        <div className={'flex items-center space-x-3 w-full'}>
                            <SpinLoader size={'small'} color={'#fff'}/>
                            <p>Registering</p>
                        </div>
                    )}
                </button>
            </div>
        </form>
    )
}
export default RegistrationForm