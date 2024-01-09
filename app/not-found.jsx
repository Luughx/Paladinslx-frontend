import ImageBlur from "@/components/all/ImageBlur";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Main() {
  return (
    <div>
      <div className="flex fixed justify-center items-center inset-0">
        <div className="max-w-4xl grid grid-cols-1">
          <div className={`bg-gray-900 rounded-2xl p-4`}>
            <div className="flex-none sm:flex my-4">
              <div className="text-gray-500 mr-2">
                <span className="">
                  <ImageBlur
                    src={"backend.cat-silhouette.png"}
                    width={200}
                    height={200}
                    alt={"cat-silhouette-paladins"}
                    classes={""}
                  />
                </span>
              </div>
              <div className="flex items-center justify-center ml-3 mr-4">
                <div>
                  <div className="text-xl text-gray-100 font-medium">
                    Error 404
                  </div>
                  <div className="text-lg text-gray-100">
                    This page doesn't exist
                  </div>
                  <Link href={"/"} className="mt-1 text-blue-800 rounded-xl font-medium text-center">
                    Return
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}