import { DeleteModal } from "@/components/DeleteModal";
import { getAllProducts } from "@/lib/data";
import { Button, Table } from "@heroui/react";
import Link from "next/link";

const ProductsPage = async () => {
  const productData = await getAllProducts();
  // console.log(productData);

  return (
    <div className="mt-5 container mx-auto">
      {" "}
      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Team members">
            <Table.Header className={""}>
              <Table.Column isRowHeader>Title</Table.Column>
              <Table.Column>Price</Table.Column>
              <Table.Column>Stock</Table.Column>
              <Table.Column>Action</Table.Column>
            </Table.Header>
            <Table.Body>
              {productData.map((product) => (
                <Table.Row key={product._id}>
                  <Table.Cell className={"font-medium"}>
                    {product.title}
                  </Table.Cell>
                  <Table.Cell>${product.price}</Table.Cell>
                  <Table.Cell>{product.stock}</Table.Cell>
                  <Table.Cell className={"flex flex-col sm:flex-row gap-2"}>
                    <Link href={`/products/${product._id}/edit`}>
                      <Button>Edit</Button>
                    </Link>
                    <DeleteModal productId={product._id} />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default ProductsPage;
