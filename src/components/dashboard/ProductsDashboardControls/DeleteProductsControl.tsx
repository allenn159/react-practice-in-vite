import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { useProductDashboardContext } from "../ProductsDashboardContext";
import { useDeleteProducts } from "~/requestHooks";

export function DeleteProductsControl() {
  const { selectionOptions } = useProductDashboardContext();
  const { selected, clear } = selectionOptions;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const deleteProducts = useDeleteProducts();

  const onHandleDeleteProducts = () => {
    deleteProducts.mutate(selected, {
      onSuccess: () => {
        clear();
        onClose();
      },
    });
  };

  return (
    <>
      {selected.length > 0 && (
        <Button onClick={onOpen}>{"Delete Product(s)"}</Button>
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="rgba(0, 0, 0, 0.1)" />
        <ModalContent>
          <ModalHeader>Delete Confirmation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Are you sure you want to delete the selected products?</Text>
          </ModalBody>

          <ModalFooter gap="2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="red" onClick={onHandleDeleteProducts}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
