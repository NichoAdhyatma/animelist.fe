import CommentInput from "@/components/Comment/CommentInput";
import { CommentRequest } from "@/type/comment";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";

export default function EditModal({
  isOpen,
  onOpenChange,
  comment,
}: {
  isOpen: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  comment: CommentRequest;
}) {
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Edit Comment & Rating
              </ModalHeader>
              <ModalBody className="pt-0">
                <CommentInput props={comment} isCreate={false} onClose={onClose} />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
