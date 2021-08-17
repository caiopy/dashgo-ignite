import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      fontSize={["2xl", "3xl"]} //pra mobile = 2xl e a partir disso 3xl
      fontWeight="bold"
      letterSpacing="tight"
      width="64"
    >
      dashgo
      <Text as="span" ml="1" color="pink.500">.</Text>
    </Text>
  )
}