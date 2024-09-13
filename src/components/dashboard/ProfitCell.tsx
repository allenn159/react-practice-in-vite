import { Flex, Text } from "@chakra-ui/react";
import type { Product } from "~/types";
import { calculateProfitInDollars, calculateProfitPercentage } from "../utils";

type ProfitCellProps = {
  product: Product;
};

export function ProfitCell({ product }: ProfitCellProps) {
  const profitInDollars = calculateProfitInDollars(
    product.purchase_price,
    product.fees,
    product.sold_price
  );
  const profit = () => {
    if (Number(profitInDollars) > 0) {
      return `+$${profitInDollars}`;
    }

    if (Number(profitInDollars) < 0) {
      return `-$${profitInDollars.substring(1)}`;
    }
  };

  const color = () => {
    if (Number(profitInDollars) > 0) {
      return "green.500";
    }

    if (Number(profitInDollars) < 0) {
      return "red.500";
    }

    return "black";
  };

  const profitPercentage = () => {
    const profitAsPercentage = calculateProfitPercentage(
      product.purchase_price,
      product.fees,
      product.sold_price
    );

    if (profitAsPercentage > 0) {
      return `(+$${profitAsPercentage}%)`;
    }

    if (profitAsPercentage < 0) {
      return `(${profitAsPercentage}%)`;
    }
  };
  return (
    <Flex color={color()} gap="2">
      <Text>{profit()}</Text>
      <Text>{profitPercentage()}</Text>
    </Flex>
  );
}
