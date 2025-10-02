'use client'

// vendors
import { Alert } from '@heroui/alert'
import { Button } from '@heroui/button'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@heroui/modal'
import { Textarea } from '@heroui/input'
// icons
import { SendIcon } from 'lucide-react'
//
import { useFeedbackFormModalHook } from './hooks'

const FORM_ID = 'feedback-form'

export function FeedbackFormModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const {
    isFormDataValid,
    isSubmitted,
    handleReset,
    handleFormDataChange,
    handleSubmit,
  } = useFeedbackFormModalHook()

  return (
    <Modal isOpen={isOpen} hideCloseButton>
      <ModalContent>
        <ModalHeader className="bg-primary text-background">
          Saran Perbaikan
        </ModalHeader>

        <ModalBody className="pt-4">
          {isSubmitted ? (
            <Alert color="success" title="Saran Anda telah terkirim!">
              Terima kasih atas partisipasi Anda dalam pengembangan{' '}
              <b>Sensasi POS</b>
            </Alert>
          ) : (
            <>
              <p>
                Tuliskan saran perbaikan, laporan <i>bug</i>, atau fitur yang
                Anda inginkan di bawah ini:
              </p>
              <FeedbackForm
                onSubmit={handleSubmit}
                setFormData={handleFormDataChange}
              />
            </>
          )}

          <p className="text-xs text-gray-500">
            Saran Anda akan sangat membantu kami untuk meningkatkan kualitas
            aplikasi.
          </p>
        </ModalBody>

        <ModalFooter>
          <Button
            onClick={() => {
              onClose()
              handleReset()
            }}>
            {isSubmitted ? 'Tutup' : 'Batal'}
          </Button>

          <Button
            color="primary"
            type="submit"
            form={FORM_ID}
            isDisabled={!isFormDataValid || isSubmitted}
            endContent={<SendIcon size={16} className="-ml-1" />}>
            Kirim
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

function FeedbackForm({
  onSubmit,
  setFormData,
}: {
  onSubmit: () => void
  setFormData: (
    // key: 'message',
    value: string,
  ) => void
}) {
  return (
    <form id={FORM_ID} onSubmit={onSubmit}>
      <Textarea
        placeholder="Tuliskan minimal 10 karakter"
        onValueChange={value => {
          setFormData(
            // 'message',
            value,
          )
        }}
      />
    </form>
  )
}
