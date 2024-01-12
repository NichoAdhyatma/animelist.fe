"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  cn,
  useDisclosure,
} from "@nextui-org/react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { EditDocumentIcon } from "./EditDocumentIcon";
import { DeleteDocumentIcon } from "./DeleteDocumentIcon";
import EditModal from "./EditModal";
import { CommentInputProps, CommentRequest } from "@/type/comment";

export default function CommentDropdownAction({
  comment
}: {
  comment: CommentRequest
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button isIconOnly variant="light">
            <HiOutlineDotsVertical className="w-5 h-5" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu variant="solid" aria-label="Dropdown menu with icons">
          <DropdownItem
            key="edit"
            startContent={<EditDocumentIcon className={iconClasses} />}
            onPress={onOpen}
          >
            Edit Comment
          </DropdownItem>
          <DropdownItem
            key="delete"
            className="text-danger"
            color="danger"
            startContent={
              <DeleteDocumentIcon className={cn(iconClasses, "text-danger")} />
            }
          >
            Delete Comment
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <EditModal isOpen={isOpen} onOpenChange={onOpenChange} comment={comment} />
    </>
  );
}
