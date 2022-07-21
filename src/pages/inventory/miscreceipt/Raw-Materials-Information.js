import React, { useEffect, useRef } from 'react'
import { Button, ButtonGroup, Flex, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, Select, Spinner, Text, useDisclosure, VStack } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import { AddConfirmation } from './Action-Modals'

export const RawMaterialsInformation = ({ rawMatsInfo, setRawMatsInfo, listDataTempo, setListDataTempo, details, setDetails,
    suppliers, rawMats, uoms, setSelectorId
}) => {

    const supplierRef = useRef()
    const { isOpen: isModal, onClose: closeModal, onOpen: openModal } = useDisclosure()

    const detailHandler = (data) => {
        if (data) {
            setDetails(data)
        } else {
            setDetails('')
        }
    }

    return (
        <Flex justifyContent='center' flexDirection='column' w='full'>
            <VStack w='full' spacing={6}>
                <Text bgColor='secondary' w='full' color='white' textAlign='center' fontWeight='semibold'>Raw Materials Information</Text>
                <Flex w='95%' justifyContent='space-between'>

                    <VStack alignItems='start' w='40%' mx={5}>

                        {/* Supplier Code */}
                        <HStack w='full'>
                            <Text minW='50%' w='auto' bgColor='secondary' color='white' pl={2} py={2.5} fontSize='xs'>Supplier: </Text>
                            {
                                suppliers.length > 0 ?
                                    <Select
                                        onChange={(e) => setRawMatsInfo({
                                            itemCode: rawMatsInfo.itemCode,
                                            supplier: e.target.value,
                                            uom: rawMatsInfo.uom,
                                            expirationDate: rawMatsInfo.expirationDate,
                                            quantity: rawMatsInfo.quantity
                                        })}
                                        ref={supplierRef}
                                        w='full' placeholder=' ' bgColor='#fff8dc'
                                    >
                                        {
                                            suppliers?.map((item, i) =>
                                                <option key={i} value={item.supplierName}>{item.supplierName}</option>
                                            )
                                        }
                                    </Select>
                                    : <Spinner />
                            }
                        </HStack>

                    </VStack>

                    <VStack alignItems='start' w='40%' mx={5}>

                        {/* Supplier Name */}
                        <HStack w='full'>
                            <Text minW='50%' w='auto' bgColor='secondary' color='white' pl={2} pr={10} py={2.5} fontSize='xs'>Supplier Name: </Text>
                            <Text bgColor='gray.200' w='full' border='1px' borderColor='gray.200' py={1.5}>{rawMatsInfo.supplier ? rawMatsInfo.supplier : 'Please select a supplier'}</Text>
                        </HStack>

                    </VStack>

                </Flex>
                <VStack alignItems='start' w='92%' mx={5}>
                    {/* Details */}
                    <HStack w='full'>
                        <Text w='auto' bgColor='secondary' color='white' pl={2} pr={5} py={2.5} fontSize='xs'>Details: </Text>
                        <Input
                            onChange={(e) => detailHandler(e.target.value)}
                            value={details}
                            minW='93%' w='auto' bgColor='#fff8dc'
                        />
                    </HStack>
                </VStack>
                <Flex w='full' justifyContent='end' mt={4}>
                    <Button
                        onClick={() => openModal()}
                        disabled={!rawMatsInfo.supplier || !details}
                        size='xs' colorScheme='blue'
                    >
                        New
                    </Button>
                </Flex>
            </VStack >

            {
                isModal && (
                    <RawMatsInfoModal
                        rawMatsInfo={rawMatsInfo}
                        setRawMatsInfo={setRawMatsInfo}
                        listDataTempo={listDataTempo}
                        setListDataTempo={setListDataTempo}
                        details={details}
                        setDetails={setDetails}
                        supplierRef={supplierRef}
                        rawMats={rawMats}
                        uoms={uoms}
                        setSelectorId={setSelectorId}
                        isOpen={isModal}
                        onClose={closeModal}
                    />
                )
            }

        </Flex >
    )
}


export const RawMatsInfoModal = ({ isOpen, onClose, details, setDetails, rawMatsInfo, setRawMatsInfo,
    listDataTempo, setListDataTempo, supplierRef, rawMats, uoms, setSelectorId
}) => {

    const { isOpen: isAdd, onClose: closeAdd, onOpen: openAdd } = useDisclosure()
    const openAddConfirmation = () => {
        openAdd()
    }

    return (
        <>
            <Modal isOpen={isOpen} onClose={() => { }} isCentered size='5xl'>
                <ModalContent>
                    <ModalHeader mb={4}>
                        <Flex justifyContent='center'>
                            Raw Materials Information
                        </Flex>
                    </ModalHeader>
                    <ModalCloseButton onClick={onClose} />
                    <ModalBody mb={5}>
                        <Flex w='95%' justifyContent='space-between'>
                            <VStack alignItems='start' w='40%' mx={5}>
                                {/* Item Code */}
                                <HStack w='full'>
                                    <Text minW='50%' w='auto' bgColor='secondary' color='white' pl={2} pr={7} py={2.5} fontSize='xs'>Item Code: </Text>\
                                    {
                                        rawMats.length > 0 ?
                                            <Select
                                                onChange={(e) => setRawMatsInfo({
                                                    itemCode: e.target.value,
                                                    supplier: rawMatsInfo.supplier,
                                                    uom: rawMatsInfo.uom,
                                                    expirationDate: rawMatsInfo.expirationDate,
                                                    quantity: rawMatsInfo.quantity
                                                })}
                                                w='full' placeholder=' ' bgColor='#fff8dc'
                                            >
                                                {
                                                    rawMats?.map((item, i) =>
                                                        <option key={i} value={item.itemCode}>{item.itemCode}</option>
                                                    )
                                                }
                                            </Select>
                                            : <Spinner />
                                    }
                                </HStack>


                                {/* Expiration Date */}
                                <HStack w='full'>
                                    <Text minW='50%' w='auto' bgColor='secondary' color='white' pl={2} pr={7} py={2.5} fontSize='xs'>Expiration Date: </Text>
                                    <Input
                                        onChange={(e) => setRawMatsInfo({
                                            itemCode: rawMatsInfo.itemCode,
                                            supplier: rawMatsInfo.supplier,
                                            uom: rawMatsInfo.uom,
                                            expirationDate: e.target.value,
                                            quantity: rawMatsInfo.quantity
                                        })}
                                        w='full' type='date' bgColor='#fff8dc'
                                    />
                                </HStack>

                                {/* UOM */}
                                < HStack w='full'>
                                    <Text minW='50%' w='auto' bgColor='secondary' color='white' pl={2} pr={7} py={2.5} fontSize='xs'>UOM: </Text>
                                    {
                                        uoms.length > 0 ?
                                            <Select
                                                onChange={(e) => setRawMatsInfo({
                                                    itemCode: rawMatsInfo.itemCode,
                                                    supplier: rawMatsInfo.supplier,
                                                    uom: e.target.value,
                                                    expirationDate: rawMatsInfo.expirationDate,
                                                    quantity: rawMatsInfo.quantity
                                                })}
                                                w='full' placeholder=' ' bgColor='#fff8dc'
                                            >
                                                {
                                                    uoms?.map((item, i) =>
                                                        <option key={i} value={item.uoM_Code}>{item.uoM_Code}</option>
                                                    )
                                                }
                                            </Select>
                                            : <Spinner />
                                    }
                                </HStack>

                                {/* Quantity */}
                                <HStack w='full'>
                                    <Text minW='50%' w='auto' bgColor='secondary' color='white' pl={2} pr={7} py={2.5} fontSize='xs'>Quantity: </Text>
                                    <Input
                                        onChange={(e) => setRawMatsInfo({
                                            itemCode: rawMatsInfo.itemCode,
                                            supplier: rawMatsInfo.supplier,
                                            uom: rawMatsInfo.uom,
                                            expirationDate: rawMatsInfo.expirationDate,
                                            quantity: Number(e.target.value)
                                        })}
                                        w='full' type='number' bgColor='#fff8dc'
                                    />
                                </HStack>

                            </VStack>
                            <VStack alignItems='start' w='40%' mx={5}>
                                {/* Item Description */}
                                <HStack w='full'>
                                    <Text minW='50%' w='auto' bgColor='secondary' color='white' pl={2} pr={10} py={2.5} fontSize='xs'>Item Description: </Text>
                                    <Text bgColor='gray.200' w='full' border='1px' borderColor='gray.200' py={1.5}>{rawMatsInfo.itemCode ? rawMatsInfo.itemCode : 'Item Code required'}</Text>
                                </HStack>

                            </VStack>
                        </Flex>
                    </ModalBody>
                    <ModalFooter>
                        <ButtonGroup size='xs'>
                            <Button
                                onClick={openAddConfirmation}
                                disabled={
                                    !rawMatsInfo.itemCode || !rawMatsInfo.supplier || !rawMatsInfo.uom ||
                                    !rawMatsInfo.expirationDate || !rawMatsInfo.quantity || !details
                                }
                                colorScheme='blue' px={4}
                            >Add
                            </Button>
                            <Button colorScheme='red' onClick={onClose}>Cancel</Button>
                        </ButtonGroup>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            {
                isAdd && (
                    <AddConfirmation
                        isOpen={isAdd}
                        onClose={closeAdd}
                        closeAddModal={onClose}
                        details={details} setDetails={setDetails} rawMatsInfo={rawMatsInfo} setRawMatsInfo={setRawMatsInfo}
                        listDataTempo={listDataTempo} setListDataTempo={setListDataTempo}
                        supplierRef={supplierRef}
                        setSelectorId={setSelectorId}
                    />
                )
            }
        </>
    )
}