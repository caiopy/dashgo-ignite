import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex
      align="center"
    >
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Caio P</Text>
          <Text color="gray.300" fontSize="small"> caiop@hotmail.com</Text>
        </Box>
      )}
      <Avatar size="md" name="Caio P" />

    </Flex>
  )
}