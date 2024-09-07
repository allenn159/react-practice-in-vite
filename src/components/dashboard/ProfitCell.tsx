import { Td, Text } from "@chakra-ui/react";
import type { Product } from "~/types";
import { calculateProfitInDollars, calculateProfitPercentage } from "../utils";

type ProfitCellProps = {
  product: Product;
};

export function ProfitCell({ product }: ProfitCellProps) {
  return (
    <Td>
      <Text color="black">
        $
        {calculateProfitInDollars(
          product.purchase_price,
          product.fees,
          product.sold_price
        )}
      </Text>
    </Td>
  );
}
