import { Button } from "@/components/ui/button";
import {
  ThumbsUp,
  ThumbsDown,
  Phone,
  MessageSquare,
  Mail,
  MapPin,
} from "lucide-react";
import Container from "./Container";
import Link from "next/link";

export default function HelpCenter() {
  return (
    <Container className="flex flex-col w-full py-6">
      <h1 className="text-2xl font-bold text-center mb-8">GET HELP</h1>
      <div className="flex lg:flex-row flex-col gap-10">
        <div className="space-y-8 w-full px-3 border-r ">
          <h2 className="text-xl font-bold">
            WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
          </h2>

          <div className="space-y-4">
            <p>
              We want to make buying your favourite Nike shoes and gear online
              fast and easy, and we accept the following payment options:
            </p>

            <p className="font-medium">
              Visa, Mastercard, Diners Club, Discover, American Express, Visa
              Electron, Maestro
            </p>

            <p>
              If you enter your PAN information at checkout, yo&apos;ll be
              able to pay for your order with PayTM or a local credit or debit
              card.
            </p>

            <p>Apple Pay</p>

            <p>
              <span className="font-medium">Nike Members</span> can store
              multiple debit or credit cards in their profile for faster
              checkout. If you&apos;re not already a Member,{" "}
              <a href="#" className="underline">
                join us today
              </a>
              .
            </p>

            <div className="flex gap-4 mt-6">
              <Link href="/register">
                <Button variant="default">JOIN US</Button>
              </Link>
              <Link href="/category">
                <Button variant="outline">SHOP NIKE</Button>
              </Link>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="font-bold">FAQs</h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium">
                  Does my card need international purchases enabled?
                </h4>
                <p className="text-gray-600">
                  Yes, we recommend asking your bank to enable international
                  purchases on your card. You will be notified at checkout if
                  international purchases need to be enabled.
                </p>
                <p className="text-gray-600">
                  Please note, some banks may charge a small transaction fee for
                  international orders.
                </p>
              </div>

              <div>
                <h4 className="font-medium">
                  Can I pay for my order with multiple methods?
                </h4>
                <p className="text-gray-600">
                  No, payment for Nike orders can&apos;t be split between
                  multiple payment methods
                </p>
              </div>

              <div>
                <h4 className="font-medium">
                  What payment method is accepted for SNKRS orders?
                </h4>
                <p className="text-gray-600">
                  You can use any accepted credit card to pay for your SNKRS
                  order.
                </p>
              </div>

              <div>
                <h4 className="font-medium">
                  Why don`&apos;`t I see Apple Pay as an option?
                </h4>
                <p className="text-gray-600">
                  To see Apple Pay as an option in the Nike App or on Nike.com,
                  you`&apos;`ll need to use a compatible Apple device running
                  the latest OS, be signed in to your iCloud account and have a
                  supported card in your Wallet. Additionally, you&apos;ll
                  need to use Safari to use Apple Pay on Nike.com.
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <p>Was this answer helpful?</p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm">
                  <ThumbsUp className="w-4 h-4 mr-2" />
                  Yes
                </Button>
                <Button variant="outline" size="sm">
                  <ThumbsDown className="w-4 h-4 mr-2" />
                  No
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold">RELATED</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:underline">
                    WHAT ARE NIKE&apos;S DELIVERY OPTIONS?
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:underline">
                    HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="space-y-8 w-full lg:w-[40%]">
          <h2 className="text-xl font-bold text-center">CONTACT US</h2>

          <div className="flex flex-col lg:justify-center lg:items-center gap-8 px-10">
            <div className="flex lg:flex-col justify-center items-center gap-6 w-full lg:w-3/4 space-y-4">
              <Phone className="w-12 h-12 " />
              <div className="text-center">
                <p className="font-bold">0333 2200956</p>
                <p className="text-gray-600">
                  Products & Orders: 24 hours a day, 7 days a week
                </p>
                <p className="text-gray-600">
                  Company Info & Enquiries: 07:30 - 16:30, Monday - Friday
                </p>
              </div>
            </div>
            <div className="flex lg:flex-col justify-start lg:justify-center items-center gap-6 w-full lg:w-auto space-y-4">
              <MessageSquare className="w-12 h-12" />
              <div className="flex flex-col justify-center items-center text-center w-full">
                <p className="text-gray-600">24 hours a day</p>
                <p className="text-gray-600">7 days a week</p>
              </div>
            </div>
            <div className="flex lg:flex-col justify-start lg:justify-center items-center gap-6 w-full lg:w-auto space-y-4">
              <Mail className="w-12 h-12" />
              <div className="flex flex-col justify-center items-center text-center w-full">
                <p className="text-gray-600">We&apos;ll reply within</p>
                <p className="text-gray-600">five business days</p>
              </div>
            </div>
            <div className="flex lg:flex-col justify-start lg:justify-center items-center gap-6 w-full lg:w-auto space-y-4">
              <MapPin className="w-12 h-12" />
              <div className="flex flex-col justify-center items-center text-center w-full">
                <p className="font-bold">STORE LOCATOR</p>
                <p className="text-gray-600">
                  Find Nike retail stores near you
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
