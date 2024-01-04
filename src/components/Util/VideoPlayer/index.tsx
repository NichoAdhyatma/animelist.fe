"use client";

import YouTube, { YouTubeEvent } from "react-youtube";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function VideoPlayer({ videoId }: { videoId: string }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="fixed bottom-5 right-5">
      <Button color="warning" variant="faded" onPress={onOpen}>Tonton Trailer</Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="5xl"
        backdrop="blur"
      >
        <ModalContent>
          {(_) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Trailer</ModalHeader>
              <ModalBody>
                <div className="w-full flex justify-center">
                  <YouTube
                    videoId={videoId}
                    onReady={(e: YouTubeEvent<any>) => {
                      e.target.pauseVideo();
                    }}
                  />
                </div>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
