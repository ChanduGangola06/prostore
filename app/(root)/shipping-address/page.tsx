import { auth } from "@/auth";
import { getMyCart } from "@/lib/actions/cart.actions";
import { ShippingAddress } from "@/types";
import { redirect } from "next/navigation";
import ShippingAddressForm from "./shipping-address-form";
import { getUserById } from "@/lib/actions/user.actions";
import CheckoutSteps from "@/components/shared/checkout-steps";

const ShippingAddressPage = async () => {
    const cart = await getMyCart();

    if (!cart || cart.items.length === 0) redirect('/cart');

    const session = await auth();

    const userId = session?.user?.id;

    if(!userId) throw new Error('No user ID');

    const user = await getUserById(userId);

    return ( 
        <>
            <CheckoutSteps current={1} />
            <ShippingAddressForm address={user.address as ShippingAddress} />
        </>
     );
}
 
export default ShippingAddressPage;