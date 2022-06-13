import React from 'react'
import {
    Flex,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Text,
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Badge,
    VStack,
    Table, Tbody, Td, Th, Thead, Tr
} from '@chakra-ui/react'
import { CgDanger } from 'react-icons/cg'
import { RiFileList3Fill } from 'react-icons/ri'
import PageScrollImportModal from '../../../components/PageScrollImport-Modal'
import PageScrollModalErrorList from '../../../components/PageScrollErrorList'

export const ErrorModal = ({ isOpen, onClose, errorData }) => {

    const duplicateList = errorData?.duplicateList?.map(list => {
        return {
            orderDate: list.orderDate,
            dateNeeded: list.dateNeeded,
            farmType: list.farmType,
            farmCode: list.farmCode,
            category: list.category,
            itemCode: list.itemCode,
            itemDescription: list.itemDescription,
            uom: list.uom,
            quantity: list.quantityOrdered,
        }
    })

    const filteredOrders = errorData?.filteredOrders?.map(list => {
        return {
            orderDate: list.orderDate,
            dateNeeded: list.dateNeeded,
            farmType: list.farmType,
            farmCode: list.farmCode,
            category: list.category,
            itemCode: list.itemCode,
            itemDescription: list.itemDescription,
            uom: list.uom,
            quantity: list.quantityOrdered,
        }
    })

    const invaliddatelist = errorData?.invaliddatelist?.map(list => {
        return {
            orderDate: list.orderDate,
            dateNeeded: list.dateNeeded,
            farmType: list.farmType,
            farmCode: list.farmCode,
            category: list.category,
            itemCode: list.itemCode,
            itemDescription: list.itemDescription,
            uom: list.uom,
            quantity: list.quantityOrdered,
        }
    })

    const notExistFarmCode = errorData?.notExistFarmCode?.map(list => {
        return {
            orderDate: list.orderDate,
            dateNeeded: list.dateNeeded,
            farmType: list.farmType,
            farmCode: list.farmCode,
            category: list.category,
            itemCode: list.itemCode,
            itemDescription: list.itemDescription,
            uom: list.uom,
            quantity: list.quantityOrdered,
        }
    })

    const notExistFarmName = errorData?.notExistFarmName?.map(list => {
        return {
            orderDate: list.orderDate,
            dateNeeded: list.dateNeeded,
            farmType: list.farmType,
            farmCode: list.farmCode,
            category: list.category,
            itemCode: list.itemCode,
            itemDescription: list.itemDescription,
            uom: list.uom,
            quantity: list.quantityOrdered,
        }
    })

    const notExistRawMats = errorData?.notExistRawMats?.map(list => {
        return {
            orderDate: list.orderDate,
            dateNeeded: list.dateNeeded,
            farmType: list.farmType,
            farmCode: list.farmCode,
            category: list.category,
            itemCode: list.itemCode,
            itemDescription: list.itemDescription,
            uom: list.uom,
            quantity: list.quantityOrdered,
        }
    })

    const notExistUom = errorData?.notExistUom?.map(list => {
        return {
            orderDate: list.orderDate,
            dateNeeded: list.dateNeeded,
            farmType: list.farmType,
            farmCode: list.farmCode,
            category: list.category,
            itemCode: list.itemCode,
            itemDescription: list.itemDescription,
            uom: list.uom,
            quantity: list.quantityOrdered,
        }
    })

    return (
        <Modal isOpen={isOpen} onClose={() => { }} isCentered size='6xl'>
            <ModalContent>
                <ModalHeader>
                    <CgDanger fontSize='30px' color='red' />
                    <Flex justifyContent='center'>
                        <Text fontSize='md'>Orders were not synced due to the following reasons:</Text>
                    </Flex>
                </ModalHeader>
                <ModalCloseButton onClick={onClose} />

                <PageScrollImportModal>

                    <ModalBody>
                        <Accordion allowToggle>


                            {duplicateList?.length > 0 ?
                                <AccordionItem bgColor='gray.200'>
                                    <Flex>
                                        <AccordionButton color='white' fontWeight='semibold'>
                                            <Box flex='1' textAlign='center' color='secondary' fontWeight='semibold'>
                                                Duplicated Lists <Badge color='danger'>{duplicateList?.length}</Badge>
                                            </Box>
                                            <AccordionIcon color='secondary' />
                                        </AccordionButton>
                                    </Flex>

                                    <AccordionPanel pb={4}>
                                        <PageScrollModalErrorList>

                                            {
                                                duplicateList ? (

                                                    <Table variant='striped' size="sm">
                                                        <Thead bgColor='secondary'>
                                                            <Tr>
                                                                <Th color='white'>Line</Th>
                                                                <Th color='white'>Order Date</Th>
                                                                <Th color='white'>Date Needed</Th>
                                                                <Th color='white'>Farm</Th>
                                                                <Th color='white'>Farm Code</Th>
                                                                <Th color='white'>Category</Th>
                                                                <Th color='white'>Item Code</Th>
                                                                <Th color='white'>Item Description</Th>
                                                                <Th color='white'>UOM</Th>
                                                                <Th color='white'>Quantity Order</Th>
                                                            </Tr>
                                                        </Thead>

                                                        <Tbody>
                                                            {duplicateList?.map((d, i) =>
                                                                <Tr key={i}>
                                                                    <Td>{i + 1}</Td>
                                                                    <Td>{d?.orderDate}</Td>
                                                                    <Td>{d?.dateNeeded}</Td>
                                                                    <Td>{d?.farmType}</Td>
                                                                    <Td>{d?.farmCode}</Td>
                                                                    <Td>{d?.category}</Td>
                                                                    <Td>{d?.itemCode}</Td>
                                                                    <Td>{d?.itemDescription}</Td>
                                                                    <Td>{d?.uom}</Td>
                                                                    <Td>{d?.quantity}</Td>
                                                                </Tr>
                                                            )}
                                                        </Tbody>
                                                    </Table>

                                                )
                                                    :
                                                    <Flex justifyContent='center' mt='30px'>
                                                        <VStack>
                                                            <RiFileList3Fill fontSize='200px' />
                                                            <Text color='white'>There are no duplicated lists on this file</Text>
                                                        </VStack>
                                                    </Flex>
                                            }

                                        </PageScrollModalErrorList>
                                    </AccordionPanel>
                                </AccordionItem>
                                : ''
                            }
                            {filteredOrders?.length > 0 ?
                                <AccordionItem bgColor='gray.200'>
                                    <Flex>
                                        <AccordionButton color='white' fontWeight='semibold'>
                                            <Box flex='1' textAlign='center' color='secondary' fontWeight='semibold'>
                                                Filtered Orders <Badge color='danger'>{filteredOrders?.length}</Badge>
                                            </Box>
                                            <AccordionIcon color='secondary' />
                                        </AccordionButton>
                                    </Flex>

                                    <AccordionPanel pb={4}>
                                        <PageScrollModalErrorList>

                                            {
                                                filteredOrders ? (

                                                    <Table variant='striped' size="sm">
                                                        <Thead bgColor='secondary'>
                                                            <Tr>
                                                                <Th color='white'>Line</Th>
                                                                <Th color='white'>Order Date</Th>
                                                                <Th color='white'>Date Needed</Th>
                                                                <Th color='white'>Farm</Th>
                                                                <Th color='white'>Farm Code</Th>
                                                                <Th color='white'>Category</Th>
                                                                <Th color='white'>Item Code</Th>
                                                                <Th color='white'>Item Description</Th>
                                                                <Th color='white'>UOM</Th>
                                                                <Th color='white'>Quantity Order</Th>
                                                            </Tr>
                                                        </Thead>

                                                        <Tbody>
                                                            {filteredOrders?.map((d, i) =>
                                                                <Tr key={i}>
                                                                    <Td>{i + 1}</Td>
                                                                    <Td>{d?.orderDate}</Td>
                                                                    <Td>{d?.dateNeeded}</Td>
                                                                    <Td>{d?.farmType}</Td>
                                                                    <Td>{d?.farmCode}</Td>
                                                                    <Td>{d?.category}</Td>
                                                                    <Td>{d?.itemCode}</Td>
                                                                    <Td>{d?.itemDescription}</Td>
                                                                    <Td>{d?.uom}</Td>
                                                                    <Td>{d?.quantity}</Td>
                                                                </Tr>
                                                            )}
                                                        </Tbody>
                                                    </Table>

                                                )
                                                    :
                                                    <Flex justifyContent='center' mt='30px'>
                                                        <VStack>
                                                            <RiFileList3Fill fontSize='200px' />
                                                            <Text color='white'>There are no duplicated lists on this file</Text>
                                                        </VStack>
                                                    </Flex>
                                            }

                                        </PageScrollModalErrorList>
                                    </AccordionPanel>
                                </AccordionItem>
                                : ''
                            }
                            {invaliddatelist?.length > 0 ?
                                <AccordionItem bgColor='gray.200'>
                                    <Flex>
                                        <AccordionButton color='white' fontWeight='semibold'>
                                            <Box flex='1' textAlign='center' color='secondary' fontWeight='semibold'>
                                                Invalid Date List <Badge color='danger'>{invaliddatelist?.length}</Badge>
                                            </Box>
                                            <AccordionIcon color='secondary' />
                                        </AccordionButton>
                                    </Flex>

                                    <AccordionPanel pb={4}>
                                        <PageScrollModalErrorList>

                                            {
                                                invaliddatelist ? (

                                                    <Table variant='striped' size="sm">
                                                        <Thead bgColor='secondary'>
                                                            <Tr>
                                                                <Th color='white'>Line</Th>
                                                                <Th color='white'>Order Date</Th>
                                                                <Th color='white'>Date Needed</Th>
                                                                <Th color='white'>Farm</Th>
                                                                <Th color='white'>Farm Code</Th>
                                                                <Th color='white'>Category</Th>
                                                                <Th color='white'>Item Code</Th>
                                                                <Th color='white'>Item Description</Th>
                                                                <Th color='white'>UOM</Th>
                                                                <Th color='white'>Quantity Order</Th>
                                                            </Tr>
                                                        </Thead>

                                                        <Tbody>
                                                            {invaliddatelist?.map((d, i) =>
                                                                <Tr key={i}>
                                                                    <Td>{i + 1}</Td>
                                                                    <Td>{d?.orderDate}</Td>
                                                                    <Td>{d?.dateNeeded}</Td>
                                                                    <Td>{d?.farmType}</Td>
                                                                    <Td>{d?.farmCode}</Td>
                                                                    <Td>{d?.category}</Td>
                                                                    <Td>{d?.itemCode}</Td>
                                                                    <Td>{d?.itemDescription}</Td>
                                                                    <Td>{d?.uom}</Td>
                                                                    <Td>{d?.quantity}</Td>
                                                                </Tr>
                                                            )}
                                                        </Tbody>
                                                    </Table>

                                                )
                                                    :
                                                    <Flex justifyContent='center' mt='30px'>
                                                        <VStack>
                                                            <RiFileList3Fill fontSize='200px' />
                                                            <Text color='white'>There are no duplicated lists on this file</Text>
                                                        </VStack>
                                                    </Flex>
                                            }

                                        </PageScrollModalErrorList>
                                    </AccordionPanel>
                                </AccordionItem>
                                : ''
                            }
                            {notExistFarmCode?.length > 0 ?
                                <AccordionItem bgColor='gray.200'>
                                    <Flex>
                                        <AccordionButton color='white' fontWeight='semibold'>
                                            <Box flex='1' textAlign='center' color='secondary' fontWeight='semibold'>
                                                Farm Code Does Not Exist <Badge color='danger'>{notExistFarmCode?.length}</Badge>
                                            </Box>
                                            <AccordionIcon color='secondary' />
                                        </AccordionButton>
                                    </Flex>

                                    <AccordionPanel pb={4}>
                                        <PageScrollModalErrorList>

                                            {
                                                notExistFarmCode ? (

                                                    <Table variant='striped' size="sm">
                                                        <Thead bgColor='secondary'>
                                                            <Tr>
                                                                <Th color='white'>Line</Th>
                                                                <Th color='white'>Order Date</Th>
                                                                <Th color='white'>Date Needed</Th>
                                                                <Th color='white'>Farm</Th>
                                                                <Th color='white'>Farm Code</Th>
                                                                <Th color='white'>Category</Th>
                                                                <Th color='white'>Item Code</Th>
                                                                <Th color='white'>Item Description</Th>
                                                                <Th color='white'>UOM</Th>
                                                                <Th color='white'>Quantity Order</Th>
                                                            </Tr>
                                                        </Thead>

                                                        <Tbody>
                                                            {notExistFarmCode?.map((d, i) =>
                                                                <Tr key={i}>
                                                                    <Td>{i + 1}</Td>
                                                                    <Td>{d?.orderDate}</Td>
                                                                    <Td>{d?.dateNeeded}</Td>
                                                                    <Td>{d?.farmType}</Td>
                                                                    <Td>{d?.farmCode}</Td>
                                                                    <Td>{d?.category}</Td>
                                                                    <Td>{d?.itemCode}</Td>
                                                                    <Td>{d?.itemDescription}</Td>
                                                                    <Td>{d?.uom}</Td>
                                                                    <Td>{d?.quantity}</Td>
                                                                </Tr>
                                                            )}
                                                        </Tbody>
                                                    </Table>

                                                )
                                                    :
                                                    <Flex justifyContent='center' mt='30px'>
                                                        <VStack>
                                                            <RiFileList3Fill fontSize='200px' />
                                                            <Text color='white'>There are no duplicated lists on this file</Text>
                                                        </VStack>
                                                    </Flex>
                                            }

                                        </PageScrollModalErrorList>
                                    </AccordionPanel>
                                </AccordionItem>
                                : ''
                            }
                            {notExistFarmName?.length > 0 ?
                                <AccordionItem bgColor='gray.200'>
                                    <Flex>
                                        <AccordionButton color='white' fontWeight='semibold'>
                                            <Box flex='1' textAlign='center' color='secondary' fontWeight='semibold'>
                                                Farm Name Does Not Exist <Badge color='danger'>{notExistFarmName?.length}</Badge>
                                            </Box>
                                            <AccordionIcon color='secondary' />
                                        </AccordionButton>
                                    </Flex>

                                    <AccordionPanel pb={4}>
                                        <PageScrollModalErrorList>

                                            {
                                                notExistFarmName ? (

                                                    <Table variant='striped' size="sm">
                                                        <Thead bgColor='secondary'>
                                                            <Tr>
                                                                <Th color='white'>Line</Th>
                                                                <Th color='white'>Order Date</Th>
                                                                <Th color='white'>Date Needed</Th>
                                                                <Th color='white'>Farm</Th>
                                                                <Th color='white'>Farm Code</Th>
                                                                <Th color='white'>Category</Th>
                                                                <Th color='white'>Item Code</Th>
                                                                <Th color='white'>Item Description</Th>
                                                                <Th color='white'>UOM</Th>
                                                                <Th color='white'>Quantity Order</Th>
                                                            </Tr>
                                                        </Thead>

                                                        <Tbody>
                                                            {notExistFarmName?.map((d, i) =>
                                                                <Tr key={i}>
                                                                    <Td>{i + 1}</Td>
                                                                    <Td>{d?.orderDate}</Td>
                                                                    <Td>{d?.dateNeeded}</Td>
                                                                    <Td>{d?.farmType}</Td>
                                                                    <Td>{d?.farmCode}</Td>
                                                                    <Td>{d?.category}</Td>
                                                                    <Td>{d?.itemCode}</Td>
                                                                    <Td>{d?.itemDescription}</Td>
                                                                    <Td>{d?.uom}</Td>
                                                                    <Td>{d?.quantity}</Td>
                                                                </Tr>
                                                            )}
                                                        </Tbody>
                                                    </Table>

                                                )
                                                    :
                                                    <Flex justifyContent='center' mt='30px'>
                                                        <VStack>
                                                            <RiFileList3Fill fontSize='200px' />
                                                            <Text color='white'>There are no duplicated lists on this file</Text>
                                                        </VStack>
                                                    </Flex>
                                            }

                                        </PageScrollModalErrorList>
                                    </AccordionPanel>
                                </AccordionItem>
                                : ''
                            }
                            {notExistRawMats?.length > 0 ?
                                <AccordionItem bgColor='gray.200'>
                                    <Flex>
                                        <AccordionButton color='white' fontWeight='semibold'>
                                            <Box flex='1' textAlign='center' color='secondary' fontWeight='semibold'>
                                                Raw Materials Does Not Exist <Badge color='danger'>{notExistRawMats?.length}</Badge>
                                            </Box>
                                            <AccordionIcon color='secondary' />
                                        </AccordionButton>
                                    </Flex>

                                    <AccordionPanel pb={4}>
                                        <PageScrollModalErrorList>

                                            {
                                                notExistRawMats ? (

                                                    <Table variant='striped' size="sm">
                                                        <Thead bgColor='secondary'>
                                                            <Tr>
                                                                <Th color='white'>Line</Th>
                                                                <Th color='white'>Order Date</Th>
                                                                <Th color='white'>Date Needed</Th>
                                                                <Th color='white'>Farm</Th>
                                                                <Th color='white'>Farm Code</Th>
                                                                <Th color='white'>Category</Th>
                                                                <Th color='white'>Item Code</Th>
                                                                <Th color='white'>Item Description</Th>
                                                                <Th color='white'>UOM</Th>
                                                                <Th color='white'>Quantity Order</Th>
                                                            </Tr>
                                                        </Thead>

                                                        <Tbody>
                                                            {notExistRawMats?.map((d, i) =>
                                                                <Tr key={i}>
                                                                    <Td>{i + 1}</Td>
                                                                    <Td>{d?.orderDate}</Td>
                                                                    <Td>{d?.dateNeeded}</Td>
                                                                    <Td>{d?.farmType}</Td>
                                                                    <Td>{d?.farmCode}</Td>
                                                                    <Td>{d?.category}</Td>
                                                                    <Td>{d?.itemCode}</Td>
                                                                    <Td>{d?.itemDescription}</Td>
                                                                    <Td>{d?.uom}</Td>
                                                                    <Td>{d?.quantity}</Td>
                                                                </Tr>
                                                            )}
                                                        </Tbody>
                                                    </Table>

                                                )
                                                    :
                                                    <Flex justifyContent='center' mt='30px'>
                                                        <VStack>
                                                            <RiFileList3Fill fontSize='200px' />
                                                            <Text color='white'>There are no duplicated lists on this file</Text>
                                                        </VStack>
                                                    </Flex>
                                            }

                                        </PageScrollModalErrorList>
                                    </AccordionPanel>
                                </AccordionItem>
                                : ''
                            }
                            {notExistUom?.length > 0 ?
                                <AccordionItem bgColor='gray.200'>
                                    <Flex>
                                        <AccordionButton color='white' fontWeight='semibold'>
                                            <Box flex='1' textAlign='center' color='secondary' fontWeight='semibold'>
                                                Raw Materials Does Not Exist <Badge color='danger'>{notExistUom?.length}</Badge>
                                            </Box>
                                            <AccordionIcon color='secondary' />
                                        </AccordionButton>
                                    </Flex>

                                    <AccordionPanel pb={4}>
                                        <PageScrollModalErrorList>

                                            {
                                                notExistUom ? (

                                                    <Table variant='striped' size="sm">
                                                        <Thead bgColor='secondary'>
                                                            <Tr>
                                                                <Th color='white'>Line</Th>
                                                                <Th color='white'>Order Date</Th>
                                                                <Th color='white'>Date Needed</Th>
                                                                <Th color='white'>Farm</Th>
                                                                <Th color='white'>Farm Code</Th>
                                                                <Th color='white'>Category</Th>
                                                                <Th color='white'>Item Code</Th>
                                                                <Th color='white'>Item Description</Th>
                                                                <Th color='white'>UOM</Th>
                                                                <Th color='white'>Quantity Order</Th>
                                                            </Tr>
                                                        </Thead>

                                                        <Tbody>
                                                            {notExistUom?.map((d, i) =>
                                                                <Tr key={i}>
                                                                    <Td>{i + 1}</Td>
                                                                    <Td>{d?.orderDate}</Td>
                                                                    <Td>{d?.dateNeeded}</Td>
                                                                    <Td>{d?.farmType}</Td>
                                                                    <Td>{d?.farmCode}</Td>
                                                                    <Td>{d?.category}</Td>
                                                                    <Td>{d?.itemCode}</Td>
                                                                    <Td>{d?.itemDescription}</Td>
                                                                    <Td>{d?.uom}</Td>
                                                                    <Td>{d?.quantity}</Td>
                                                                </Tr>
                                                            )}
                                                        </Tbody>
                                                    </Table>

                                                )
                                                    :
                                                    <Flex justifyContent='center' mt='30px'>
                                                        <VStack>
                                                            <RiFileList3Fill fontSize='200px' />
                                                            <Text color='white'>There are no duplicated lists on this file</Text>
                                                        </VStack>
                                                    </Flex>
                                            }

                                        </PageScrollModalErrorList>
                                    </AccordionPanel>
                                </AccordionItem>
                                : ''
                            }
                        </Accordion>
                    </ModalBody>

                </PageScrollImportModal>

                <ModalFooter>

                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
