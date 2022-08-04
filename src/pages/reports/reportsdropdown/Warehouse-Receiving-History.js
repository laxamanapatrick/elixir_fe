import React, { useEffect, useState } from 'react'
import { Flex, Table, Tbody, Td, Th, Thead, Tr, useDisclosure, Button } from '@chakra-ui/react'
import apiClient from '../../../services/apiClient'
import PageScrollReusable from '../../../components/PageScroll-Reusable'

const fetchWarehouseReceivingHistoryApi = async (dateFrom, dateTo) => {
  const res = await apiClient.get(`Report/WarehouseReceivingReport?dateFrom=${dateFrom}&dateTo=${dateTo}`)
  return res.data
}

export const WarehouseReceivingHistory = ({ dateFrom, dateTo, sample }) => {

  const [warehouseData, setWarehouseData] = useState([])
  const [buttonChanger, setButtonChanger] = useState(true)

  const fetchWarehouseReceivingHistory = () => {
    fetchWarehouseReceivingHistoryApi(dateFrom, dateTo, sample).then(res => {
      setWarehouseData(res)
    })
  }

  useEffect(() => {
    fetchWarehouseReceivingHistory()

    return () => {
      setWarehouseData([])
    }
  }, [dateFrom, dateTo, sample])

  return (
    <Flex w='full' flexDirection='column'>
      <Flex border='1px'>
        <PageScrollReusable minHeight='800px' maxHeight='820px'>
          <Table size='sm'>
            <Thead bgColor='secondary'>
              <Tr>
                <Th color='white'>id</Th>
                <Th color='white'>qc_date</Th>
                <Th color='white'>po_number</Th>
                {
                  buttonChanger ?
                    <>
                      <Th color='white'>item_code</Th>
                      <Th color='white'>item_desc</Th>
                      <Th color='white'>uom</Th>
                      <Th color='white'>category</Th>
                      <Th color='white'>quantity</Th>
                      <Th color='white'>manufacturing_date</Th>
                    </>
                    :
                    <>
                      <Th color='white'>expiration_date</Th>
                      <Th color='white'>total_reject</Th>
                      <Th color='white'>supplier_name</Th>
                      <Th color='white'>qc_by</Th>
                    </>
                }
              </Tr>
            </Thead>
            <Tbody>
              {
                warehouseData?.map((item, i) =>
                  <Tr key={i}>
                    <Td>{item.warehouseId}</Td>
                    <Td>{item.receiveDate}</Td>
                    <Td>{item.poNumber ? item.poNumber : ''}</Td>
                    {
                      buttonChanger
                        ?
                        <>
                          <Td>{item.itemCode}</Td>
                          <Td>{item.itemDescription}</Td>
                          <Td>{item.uom}</Td>
                          <Td>{item.category ? item.category : 'Miscellaneous'}</Td>
                          <Td>{item.quantity}</Td>
                          <Td>{item.manufacturingDate}</Td>
                        </>
                        :
                        <>
                          <Td>{item.expirationDate}</Td>
                          <Td>{item.totalReject}</Td>
                          <Td>{item.supplierName}</Td>
                          <Td>{item.receivedBy}</Td>
                        </>
                    }
                  </Tr>
                )
              }
            </Tbody>
          </Table>
        </PageScrollReusable>
      </Flex>

      <Flex justifyContent='end' mt={2}>
        <Button size='xs' colorScheme='teal' onClick={() => setButtonChanger(!buttonChanger)}>
          {buttonChanger ? `>>>>` : `<<<<`}
        </Button>
      </Flex>
    </Flex>
  )
}
