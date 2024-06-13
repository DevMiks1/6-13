import React, { useState, useRef } from "react";
import { useToast } from "@chakra-ui/react";
import logo from "../../../../../../assets/philscalogo.png";
import { ReactToPrint } from "react-to-print";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Card,
  CardBody,
  Divider,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  ButtonGroup,
  Avatar,
} from "@chakra-ui/react";

export default function IdModal({ isOpen, onClose, student }) {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const componentRef = useRef();

  const handlePrint = () => {
    window.print();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader></ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {/* Student details to print */}
          
          <div ref={componentRef}>
            <Card maxW="sm" bg="#050C9C" border="2px" borderRadius="lg">
              <CardBody p={0}>
                <Stack spacing="4" align="center" w="full">
                  <Text size="xs" color="white" textAlign="center" mt="5" className="card">
                    Republic of the Philippines
                  </Text>
                  <Heading
                    size="md"
                    color="yellow.400"
                    textAlign="center"
                    mt="-4"
                  >
                    PHILIPPINE STATE COLLEGE
                  </Heading>
                  <Heading
                    size="md"
                    color="yellow.400"
                    textAlign="center"
                    mt="-4"
                  >
                    OF AERONAUTICS
                  </Heading>
                  <Text
                    fontSize="sm"
                    fontWeight="light"
                    color="white"
                    textAlign="center"
                    mt="-5"
                  >
                    Piccio Garden, Villamor. Pasay City
                  </Text>

                  <Stack
                    direction="row"
                    align="center"
                    justify="space-between"
                    bg="#507889"
                    p="4"
                    w="full"
                  >
                    <Stack align="center">
                      <Image
                        src={logo}
                        alt="Philsca Logo"
                        boxSize="100px"
                        ml={10}
                      />
                      <Text fontSize="md" color="yellow.400" ml={10}>
                        SY-2023-2024
                      </Text>
                    </Stack>
                    <Stack align="center">
                      {student.picture === "" ? (
                        <Avatar
                          src={student.picture}
                          alt="profile"
                          boxSize="100px"
                        />
                      ) : (
                        <Image
                          src={student.picture}
                          alt="profile"
                          boxSize="150px"
                          mr={4}
                        />
                      )}
                      <Text fontSize="sm" color="yellow.400">
                        1st Sem. / 2nd Sem.
                      </Text>
                    </Stack>
                  </Stack>

                  <Stack
                    align="center"
                    justify="center"
                    bg="white"
                    p="10px"
                    rounded="lg"
                    borderColor="yellow.400"
                    w="80"
                    mb={3}
                  >
                    {student.firstname === "" && student.lastname === "" ? (
                      <Text>FULLNAME</Text>
                    ) : (
                      <Heading
                        size="md"
                        color="black"
                      >{`${student.firstname} ${student.suffix} ${student.lastname}`}</Heading>
                    )}

                    {student.schoolid === "" ? (
                      <Text>StudentId</Text>
                    ) : (
                      <Text fontSize="lg" color="black">
                        {student.schoolid}
                      </Text>
                    )}

                    {student.course === "" ? (
                      <Text>COURSE</Text>
                    ) : (
                      <Text fontSize="lg" color="black">
                        {student.course}
                      </Text>
                    )}
                  </Stack>
                </Stack>
              </CardBody>
              
            </Card>
          </div>
          {/* Student details to print */}
        </ModalBody>
        <ModalFooter>
          <ButtonGroup spacing="2">
          <ReactToPrint
            trigger={() => <Button variant="solid" colorScheme="blue">Print ID</Button>}
            content={() => componentRef.current}
          />
            <Button
              variant="ghost"
              colorScheme="blue"
              onClick={onClose}
            >
              Cancel
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
