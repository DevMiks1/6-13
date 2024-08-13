/** @format */

import React, { useState, useCallback } from "react";
import {
  Box,
  Input,
  Select,
  Flex,
  Tabs,
  TabList,
  Tab,
  Spacer,
  TabPanels,
  TabPanel,
  List,
  ListItem,
  Button,
  Text,
} from "@chakra-ui/react";
import IdToPrint from "./prelist/id/IdToPrint";
import {EmailModal} from "./prelist/student/email-modal/EmailModal";
import ApprovedModal from "./ApprovedModal";
import { useData } from "../../context/FetchAccountContext";
import StudentId from "./StudentId";
import StaffId from "./StaffId";
import FacultyId from "./FacultyId";

export default function StudIDList() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isaAprovedModalOpen, setIsaAprovedModalOpen] = useState(false);

  const [mailModalOpen, setMailModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [mail, setMail] = useState(null)
  const [approved, setApproved] = useState(null)
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCriteria, setFilterCriteria] = useState("issued"); // Default filter criteria set to 'issued'
  const { data, setData } = useData();
  const [showDepartment, setShowDepartment] = useState(false);
  const [hoveredDepartment, setHoveredDepartment] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");

  const handleViewClick = (student) => {
    setSelectedStudent(student);
    setModalOpen(true);
  };
  const handleApprovedOpen = (account) => {
    setApproved(account);
    setIsaAprovedModalOpen(true)
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedStudent(null);
  };
  const handleCloseApprovedModal = () => {
    setIsaAprovedModalOpen(false);
    setApproved(null);
  };

  const handleOpenMail = (student) => {
    console.log(student);
    setMail(student);
    setMailModalOpen(true);
  };
  const handleCloseEmailModal = () => {
    setMailModalOpen(false);
    setMail(null);
  };
  
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleOpenDepartment = useCallback(() => {
    setShowDepartment((prev) => !prev);
  }, []);

  const handleHoverDepartment = useCallback((department) => {
    setHoveredDepartment(department);
  }, []);

  const handleLeaveDepartment = useCallback(() => {
    setHoveredDepartment("");
    setShowDepartment((prev) => !prev);
  }, []);

  const handleSelectProgram = useCallback((program) => {
    setSelectedProgram(program);
  }, []);

  return (
    <>
      <Box mt={10} mx={10} mb={2}>
        <Flex gap={5}>
          <Box>
            <Input
              placeholder="Search by name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Box>
          <Box>
            <Select
              value={filterCriteria}
              onChange={(e) => setFilterCriteria(e.target.value)}
            >
              <option value="issued">Issued</option>
              <option value="non-issued">Non-Issued</option>
            </Select>
          </Box>
          <Box pos="relative">
            <Button onClick={handleOpenDepartment}>Filter</Button>
            {showDepartment && (
              <Flex
                flexDir="column"
                pos="absolute"
                bg="gray.700"
                color="white"
                justify="center"
                textAlign="center"
                mt={2}
                boxShadow="md"
                zIndex={10}
              >
                <Box pos="relative" w="100%">
                  <Box borderBottom="1px solid">
                    <Text
                      onMouseEnter={() => handleHoverDepartment("INET")}
                      cursor="pointer"
                      _hover={{ bg: "gray.700" }}
                      px="2.1rem"
                      py={2}
                    >
                      INET
                    </Text>
                    {hoveredDepartment === "INET" && (
                      <Flex
                        onMouseLeave={handleLeaveDepartment}
                        flexDir="column"
                        justify="center"
                        textAlign="center"
                        pos="absolute"
                        bg="gray.600"
                        left="100%"
                        top="0"
                        mr="2rem"
                        w="100%"
                        zIndex={11}
                      >
                        <Box
                          borderBottom="1px solid"
                          w="100%"
                          cursor="pointer"
                          onClick={() => handleSelectProgram("BSAT")}
                        >
                          <Text _hover={{ bg: "gray.500" }} px="1rem" py={2}>
                            BSAT
                          </Text>
                        </Box>
                        <Box cursor="pointer" onClick={() => handleSelectProgram("BSAMT")}>
                          <Text _hover={{ bg: "gray.500" }} px="1rem" py={2}>
                            BSAMT
                          </Text>
                        </Box>
                      </Flex>
                    )}
                  </Box>
                  <Box borderBottom="1px solid">
                    <Text
                      onMouseEnter={() => handleHoverDepartment("ICS")}
                      cursor="pointer"
                      _hover={{ bg: "gray.700" }}
                      p={2}
                      
                    >
                      ICS
                    </Text>
                    {hoveredDepartment === "ICS" && (
                      <Flex
                        onMouseLeave={handleLeaveDepartment}
                        flexDir="column"
                        justify="center"
                        textAlign="center"
                        pos="absolute"
                        bg="gray.600"
                        left="100%"
                        top="2.5rem"
                        mr="2rem"
                        w="100%"
                        zIndex={11}
                      >
                        <Box
                          borderBottom="1px solid"
                          w="100%"
                          cursor="pointer"
                          onClick={() => handleSelectProgram("BSAIT")}
                        >
                          <Text _hover={{ bg: "gray.500" }} px="1rem" py={2}>
                            BSAIT
                          </Text>
                        </Box>
                        <Box cursor="pointer" onClick={() => handleSelectProgram("BSAIS")}>
                          <Text _hover={{ bg: "gray.500" }} px="1rem" py={2}>
                            BSAIS
                          </Text>
                        </Box>
                      </Flex>
                    )}
                  </Box>
                  <Box>
                    <Text
                      onMouseEnter={() => handleHoverDepartment("ILAS")}
                      cursor="pointer"
                      _hover={{ bg: "gray.700" }}
                      p={2}
                      
                    >
                      ILAS
                    </Text>
                    {hoveredDepartment === "ILAS" && (
                      <Flex
                        onMouseLeave={handleLeaveDepartment}
                        flexDir="column"
                        justify="center"
                        textAlign="center"
                        pos="absolute"
                        bg="gray.600"
                        left="100%"
                        top="5.1rem"
                        w="fit-content"
                        zIndex={11}
                      >
                        <Box
                          borderBottom="1px solid"
                          
                          cursor="pointer"
                          onClick={() => handleSelectProgram("BSAvComm")}
                        >
                          <Text _hover={{ bg: "gray.500" }} px={5} py={2} >
                            BSAvComm
                          </Text>
                        </Box>
                        <Box cursor="pointer" onClick={() => handleSelectProgram("BSAvLog")}>
                          <Text _hover={{ bg: "gray.500" }}py={2}>
                            BSAvLog
                          </Text>
                        </Box>
                      </Flex>
                    )}
                  </Box>
                </Box>
              </Flex>
            )}
          </Box>
        </Flex>
      </Box>

      <Tabs colorScheme="purple" variant="enclosed">
        <TabList py={10} px={5}>
          <Tab _selected={{ color: "blue.700", bg: "#FFD700" }}>Students</Tab>
          <Tab _selected={{ color: "blue.700", bg: "#FFD700" }}>Staff</Tab>
          <Tab _selected={{ color: "blue.700", bg: "#FFD700" }}>Faculty</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <List>
              <ListItem>
                <StudentId
                  data={data}
                  filterCriteria={filterCriteria}
                  selectedProgram={selectedProgram}
                  searchQuery={searchQuery}
                  handleViewClick={handleViewClick}
                  handleOpenMail={handleOpenMail}
                  handleApprovedOpen={handleApprovedOpen}
                  currentPage={currentPage}
                  handlePageClick={handlePageClick}
                />
              </ListItem>
            </List>
          </TabPanel>

          <TabPanel>
            <List>
              <ListItem>
                <StaffId
                  data={data}
                  filterCriteria={filterCriteria}
                  handleApprovedOpen={handleApprovedOpen}
                  searchQuery={searchQuery}
                  handleOpenMail={handleOpenMail}
                  handleViewClick={handleViewClick}
                  currentPage={currentPage}
                  handlePageClick={handlePageClick}
                />
              </ListItem>
            </List>
          </TabPanel>

          <TabPanel>
            <List>
              <ListItem>
                <FacultyId
                  data={data}
                  filterCriteria={filterCriteria}
                  searchQuery={searchQuery}
                  handleApprovedOpen={handleApprovedOpen}
                  handleOpenMail={handleOpenMail}
                  handleViewClick={handleViewClick}
                  currentPage={currentPage}
                  handlePageClick={handlePageClick}
                />
              </ListItem>
            </List>
          </TabPanel>
        </TabPanels>
      </Tabs>

      {selectedStudent && (
        <IdToPrint
          data={data}
          setData={setData}
          isOpen={modalOpen}
          onClose={handleCloseModal}
          student={selectedStudent}
        />
      )}
      {approved && (
        <ApprovedModal 
        isOpen={isaAprovedModalOpen}
        onClose={handleCloseApprovedModal}
          approved={approved}
        
        />
      )}
      {mail && (
        <EmailModal
          data={data}
          setData={setData}
          isOpen={mailModalOpen}
          onClose={handleCloseEmailModal}
          mail={mail}
        />
      )}
    </>
  );
}
