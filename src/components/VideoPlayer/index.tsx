"use client";

import YouTube, { YouTubeProps } from "react-youtube";
import { FaPlay } from "react-icons/fa";
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

  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  return (
    <>
      <Button
        color="danger"
        variant="solid"
        onPress={onOpen}
        startContent={<FaPlay />}
      >
        Trailer
      </Button>
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
                <div className="flex justify-center">
                  <YouTube
                    opts={opts}
                    videoId={videoId}
                    onReady={onPlayerReady}
                  />
                </div>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
