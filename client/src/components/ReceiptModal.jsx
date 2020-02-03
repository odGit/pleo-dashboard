import React from 'react'
import InnerModal from './atoms/InnerModal'
import UploadReceipt from './receiptModal/UploadReceipt'

function ReceiptModal () {
  return (
    <InnerModal>
      <UploadReceipt />
    </InnerModal>
  )
}
export default ReceiptModal
