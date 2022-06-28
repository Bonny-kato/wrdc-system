import BaseLayout from "../../Layouts/BaseLayout";
import {useMutation, useQuery} from "react-query";
import {fetchHouses, registerHouse, updateHouse} from "../../provider/api";
import LoadingPlaceholder from "../../components/loading-placeholder";
import {useState} from "react";
import Modal from "../../components/Modal";
import HouseDetails from "./house-details";
import HouseList from "./house-list";
import HouseHeader from "./house-header";
import RegistrationForm from "./registration-form";
import UpdateForm from "./update-form-";


const Houses = options => {
    const [houseList, setHouseList] = useState([]);
    const [filteredHouseList, setFilteredHouseList] = useState([]);
    const [isOpen, setIsOpen] = useState(false)
    const [isUpdateAction, setIsUpdateAction] = useState(false)
    const [selectedHouse, setSelectedHouse] = useState({});


    const {isLoading, isFetching} = useQuery('houses-list', fetchHouses, {
        onSuccess: (res) => {
            setHouseList(res.data);
            setFilteredHouseList(res.data);
            setSelectedHouse(res.data[0]);
        }
    })


    const {mutate, isLoading: isRegistering} = useMutation(['register-house'], registerHouse, {
        onSuccess: () => {
            clearForm()
            setIsOpen(false);
        }
    })

    const {mutate: UpdateHouseDetails, isLoading: isUpdating} = useMutation(
        [`update-house-${selectedHouse._id}`, selectedHouse._id],
        updateHouse, {
            onSuccess: () => {
                clearForm()
                setIsOpen(false);
            }
        })


    if (isLoading || isFetching) {
        return <LoadingPlaceholder/>
    }


    const handleSearch = (e) => {
        const searchKeyword = e.target.value;
        setFilteredHouseList(houseList.filter(house =>
            house.identificationNumber.toLowerCase().includes(searchKeyword) ||
            house.owner.fullName.toLowerCase().includes(searchKeyword) ||
            house.owner.phoneNumber.toLowerCase().includes(searchKeyword) ||
            (house.owner.email && house.owner.email.toLowerCase().includes(searchKeyword))
        ))
    }

    const handleSelectedHouse = (house) => {
        setSelectedHouse(house)
    }

    const isSelected = (house) => {
        return selectedHouse.identificationNumber.toLowerCase() === house.identificationNumber.toLowerCase()
    }

    const registerHouse_ = (formData) => {
        const payload = {
            identificationNumber: formData.houseNumber,
            owner: {
                fullName: formData.ownerFullName,
                phoneNumber: formData.ownerPhone,
                email: formData.ownerEmail,
                gender: formData.ownerGender
            }
        }
        console.log("PAYLOAD:: ", payload)
        mutate(payload);
    }

    const updateHouse_ = (formData) => {
        const payload = {
            identificationNumber: formData.houseNumber,
            houseId: selectedHouse._id,
            owner: {
                fullName: formData.ownerFullName,
                phoneNumber: formData.ownerPhone,
                email: formData.ownerEmail,
                gender: formData.ownerGender
            }
        }
        UpdateHouseDetails(payload);
    }

    const clearForm = () => {
        // setValue('houseNumber', '')
        // setValue('ownerFullName', '')
        // setValue('ownerPhone', '')
        // setValue('ownerEmail', '')
        // setValue('ownerGender', '')
    }

    const handleOnEdit = () => {
        setIsUpdateAction(true);
        setIsOpen(true)
    }
    return (
        <BaseLayout>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                {!isUpdateAction && (
                    <RegistrationForm
                        onSubmit={registerHouse_}
                        setIsOpen={setIsOpen}
                        isRegistering={isRegistering}
                    />
                )}

                {isUpdateAction && (
                    <UpdateForm
                        house={selectedHouse}
                        onSubmit={updateHouse_}
                        setIsOpen={setIsOpen}
                        isUpdating={isUpdating}
                    />
                )}
            </Modal>
            <section className={'text-skin-base space-y-10 m-10 mt-20'}>


                <HouseHeader
                    setIsOpen={setIsOpen}
                    houseList={houseList}
                />

                <div className={'grid grid-cols-3 gap-10'}>
                    <HouseList
                        filteredHouseList={filteredHouseList}
                        isSelected={isSelected}
                        handleSearch={handleSearch}
                        handleSelectedHouse={handleSelectedHouse}
                    />
                    <HouseDetails onEdit={handleOnEdit} selectedHouse={selectedHouse}/>
                </div>
            </section>
        </BaseLayout>
    )
}
export default Houses;