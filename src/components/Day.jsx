/* eslint-disable react/prop-types */
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Avatar,
  Card,
  CardBody,
  Button,
  Input,
  Textarea,
  useDisclosure,
} from "@nextui-org/react";
import { isDayCompleted, setDayCompleted, setDayUncompleted } from "../api/api";
import { useState } from "react";

export const Day = ({ day, onSuccess, disabled }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [time, setTime] = useState(0);
  const [completedTask, setCompletedTask] = useState("");

  const submitCompletedDay = () => {
    setDayCompleted(day, { time, completedTask });
    onClose();
    onSuccess();

    setTime(0);
    setCompletedTask("");
  };

  const submitUncompletedDay = () => {
    setDayUncompleted(day);
    onClose();
    onSuccess();
  };

  return (
    <>
      <Card
        key={day.day}
        className="px-4"
        isPressable
        onPress={() => !disabled && onOpen()}
        isDisabled={disabled}
      >
        <CardBody>
          <Avatar
            name={day.day.toString()}
            color={isDayCompleted(day) ? "success" : "default"}
          />
          <h4 className="mt-2">День</h4>
        </CardBody>
      </Card>

      {!isDayCompleted(day) && (
        <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Точно день закончен?
                </ModalHeader>
                <ModalBody>
                  <Input
                    label="Проведенное время"
                    placeholder="Введи проведенное время"
                    value={time}
                    onValueChange={setTime}
                    className="mb-4"
                  />
                  <Textarea
                    variant="flat"
                    label="Что делала?"
                    labelPlacement="outside"
                    placeholder="Коротко, что делала"
                    value={completedTask}
                    onValueChange={setCompletedTask}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Нет
                  </Button>
                  <Button color="success" onPress={submitCompletedDay}>
                    Да
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      )}

      {isDayCompleted(day) && (
        <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
          <ModalContent>
            {() => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Детали
                </ModalHeader>
                <ModalBody>
                  <Input
                    label="Проведенное время"
                    placeholder="Введи проведенное время"
                    readOnly
                    value={day.time}
                    className="mb-4"
                  />
                  <Textarea
                    variant="flat"
                    label="Что делала?"
                    labelPlacement="outside"
                    placeholder="Коротко, что делала"
                    value={day.completedTask}
                    readOnly
                  />
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="danger"
                    variant="flat"
                    onPress={submitUncompletedDay}
                  >
                    Случайно отметила (убрать отметку)
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </>
  );
};
