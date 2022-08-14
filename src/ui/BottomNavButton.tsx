import { Box, Icon, IconButton, Text } from "@chakra-ui/react";
import { FC } from "react";
import { IconType } from "react-icons";

export const BottomNavButton: FC<{
  label: string;
  icon: IconType;
  onClick: () => void;
}> = (props) => {
  return (
    <IconButton
      h="full"
      variant="outline"
      colorScheme="blackAlpha"
      border="0"
      rounded="0"
      flex={1}
      size="xl"
      aria-label={props.label}
      icon={
        <Box>
          <Icon as={props.icon} w="20px" h="20px" color="text.normal" />
          <Text fontWeight="normal" fontSize="xs">
            {props.label}
          </Text>
        </Box>
      }
      onClick={props.onClick}
    />
  );
};
