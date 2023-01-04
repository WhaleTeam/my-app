import { Flex } from "@mantine/core";
import Link from "next/link";

export function Brand() {
  return (
    <>
    <Flex align={"center"} justify={"space-between"}>
      <Link href="/" className='logo font-bold text-2xl'>Dnn&lt;&#123;free&#125;/&gt;</Link>
    </Flex>
    </>
  )
}