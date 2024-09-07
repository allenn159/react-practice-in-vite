import { useForm, Controller } from "react-hook-form";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  useDisclosure,
  Box,
  Text,
  Flex,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useProductDashboardContext } from "../ProductsDashboardContext";

interface FormData {
  name: string;
  purchase_price: string;
  fees: string;
  sold_price: string;
  sold_at: Date | null;
}

export function AddProductControls() {
  const { addProduct } = useProductDashboardContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      purchase_price: "0.00",
      fees: "",
      sold_price: "",
      sold_at: null,
    },
  });

  const onSubmit = (data: FormData) => {
    addProduct.mutate(
      {
        ...data,
        purchase_price: Number(data.purchase_price),
        fees: data.fees ? Number(data.fees) : undefined,
        sold_price: data.sold_price ? Number(data.sold_price) : undefined,
        sold_at: data.sold_at ? data.sold_at?.getTime() / 1000 : undefined,
      },
      {
        onSuccess: () => {
          reset();
        },
      }
    );
  };

  const handleOnClose = () => {
    reset();
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>Add Product</Button>
      <Modal isOpen={isOpen} onClose={handleOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Product Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={() => handleSubmit(onSubmit)}>
              <FormControl isInvalid={!!errors.name} mb="4">
                <FormLabel>Product Name</FormLabel>
                <Input
                  {...register("name", {
                    required: "Product name is required",
                  })}
                />
                {errors.name && (
                  <Box color="red.500">{errors.name.message}</Box>
                )}
              </FormControl>

              <FormControl isInvalid={!!errors.purchase_price} mb="4">
                <FormLabel>Purchase Price</FormLabel>
                <Controller
                  name="purchase_price"
                  control={control}
                  rules={{
                    required: "Purchase price is required",
                    min: {
                      value: 0,
                      message: "Purchase price must be at least 0",
                    },
                  }}
                  render={({ field }) => (
                    <NumberInput {...field} precision={2} step={0.01} min={0}>
                      <NumberInputField />
                    </NumberInput>
                  )}
                />
                {errors.purchase_price && (
                  <Box color="red.500">{errors.purchase_price.message}</Box>
                )}
              </FormControl>

              <FormControl mb="4">
                <FormLabel>
                  <Flex gap="2">
                    <Text>Fees</Text>
                    <Text opacity={0.6}>- Optional</Text>
                  </Flex>
                </FormLabel>
                <Controller
                  control={control}
                  name="fees"
                  render={({ field }) => (
                    <NumberInput {...field} precision={2} step={0.01} min={0}>
                      <NumberInputField />
                    </NumberInput>
                  )}
                />
              </FormControl>

              <FormControl mb="4">
                <FormLabel>
                  <Flex gap="2">
                    <Text>Sold Price</Text>
                    <Text opacity={0.6}>- Optional</Text>
                  </Flex>
                </FormLabel>
                <Controller
                  control={control}
                  name="sold_price"
                  render={({ field }) => (
                    <NumberInput {...field} precision={2} step={0.01} min={0}>
                      <NumberInputField />
                    </NumberInput>
                  )}
                />
              </FormControl>

              <FormControl mb="4">
                <FormLabel>
                  <Flex gap="2">
                    <Text>Sold Date</Text>
                    <Text opacity={0.6}>- Optional</Text>
                  </Flex>
                </FormLabel>
                <Controller
                  control={control}
                  name="sold_at"
                  render={({ field }) => (
                    <DatePicker
                      selected={field.value}
                      onChange={(date) => field.onChange(date)}
                      dateFormat="MM/dd/yyyy"
                      placeholderText="Select date"
                    />
                  )}
                />
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter gap="2">
            <Button variant="outline" onClick={handleOnClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={handleSubmit(onSubmit)}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
