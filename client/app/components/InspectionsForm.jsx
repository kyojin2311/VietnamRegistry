export default function InspectionsForm() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container flex flex-wrap px-3 py-24 mx-auto items-center">
        <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200 ">
          <section className="m-4">
            <h2 class="sm:text-2xl text-xl font-medium title-font mb-2 text-gray-900 text-center">
              1. PHƯƠNG TIỆN &ensp; (VEHICLE)
            </h2>
            <div className="text-left flex w-full text-black mt-1">
              <div className="flex-1"> Biển đăng ký:</div>
              <div className="flex-1">Số quản lý: </div>
            </div>
            <div className="text-left flex w-full text-black italic text-sm">
              <div className="flex-1">(Registration Number)</div>
              <div className="flex-1">(Vehicle Inspection No.)</div>
            </div>
            <div className="text-left text-black w-full mt-1">
              Loại Phương tiện: <span className="italic text-sm">(Type)</span>
            </div>
            <div className="text-left text-black w-full mt-1">
              Nhãn Hiệu: <span className="italic text-sm">(Mark)</span>
            </div>
            <div className="text-left text-black w-full mt-1">
              Số Loại: <span className="italic text-sm">(Model Code)</span>
            </div>
            <div className="text-left text-black w-full mt-1">
              Số Máy: <span className="italic text-sm">(Engine Number)</span>
            </div>
            <div className="text-left text-black w-full mt-1">
              Số Khung:<span className="italic text-sm">(Chasis Number)</span>
            </div>
            <div className="text-left flex w-full text-black mt-1">
              <div className="flex-initial w-3/4">Năm, Nước sản xuất:</div>
              <div className="flex-initial w-32">Niên Hạn SD:</div>
            </div>
            <div className="text-left flex w-full text-black italic text-sm">
              <div className="flex-initial w-3/4">
                (Manufactured Year and Country)
              </div>
              <div className="flex-initial w-32">(Lifetime limit to)</div>
            </div>
            <div className="text-left flex w-full text-black mt-1">
              <div className="flex-initial w-3/5">
                Kinh doanh vận tải
                <span className="italic text-sm">
                  (Commercial Use)
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </span>
              </div>
              <div className="flex-initial ms-3">
                Cải tạo
                <span className="italic text-sm">
                  (Modification)
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </span>
              </div>
            </div>
          </section>
          <section className="m-4">
            <h2 className="sm:text-2xl text-xl font-medium title-font mb-2 text-gray-900 text-center">
              2. THÔNG SỐ KỸ THUẬT&ensp;(SPECIFICATIONS)
            </h2>
            <div className="text-left flex w-full text-black mt-1">
              <div className="flex-1">Công thức bánh xe:</div>
              <div className="flex-1">Vết bánh xe:</div>
            </div>
            <div className="text-left flex w-full text-black italic text-sm">
              <div className="flex-1">(Wheel Formula)</div>
              <div className="flex-1">(Wheel Tread)</div>
            </div>
            <div className="text-left text-black w-full mt-1">
              Kích thước bao:{" "}
              <span className="italic text-sm">(Overall Dimension)</span>
            </div>
            <div className="text-left text-black w-full mt-1">
              <div className="block w-full">
                KT khoang hành lý lớn nhất:{" "}
                <span className="italic text-sm">
                  (Largest luggage container Dimension)
                </span>
              </div>

              <div className="block w-full">data</div>
            </div>
            <div className="text-left text-black w-full mt-1">
              Chiều dài cơ sở:
              <span className="italic text-sm">(WheelBase)</span>
            </div>
            <div className="text-left text-black w-full mt-1">
              Khối lượng bản thân:
              <span className="italic text-sm">(KerbMass)</span>
            </div>
            <div className="text-left text-black w-full mt-1">
              <div className="block w-full">
                Khối lượng hàng CC theo TK/CP TGGT:
              </div>
              <div className="block w-full italic text-sm">
                (Design/Authorize Payload)
              </div>
            </div>
            <div className="text-left text-black w-full mt-1">
              <div className="block w-full">
                Khối lượng toàn bộ theo TK/CP TGGT:
              </div>
              <div className="block w-full italic text-sm">
                (Design/Authorize total mass)
              </div>
            </div>
          </section>
        </div>

        <div class="flex flex-col md:w-1/2 md:pl-12 items-start">
          <div className="text-left text-black w-full mt-1">
            <div className="block w-full">
              Khối lượng kéo theo theo TK/CP TGGT:
            </div>
            <div className="block w-full italic text-sm">
              (Design/Authorize towed mass)
            </div>
          </div>
          <div className="text-left text-black w-full mt-1">
            <div className="block w-full">Số người cho phép chở:</div>
            <div className="block w-full italic text-sm">
              (Permission No. of Pers Carried: seat, stood place, laying place)
            </div>
          </div>
          <div className="text-left text-black w-full mt-1">
            Loại nhiên liệu:
            <span className="italic text-sm">(Type of Fuel Used)</span>
          </div>
          <div className="text-left text-black w-full mt-1">
            Thể tích làm việc của động cơ:
            <span className="italic text-sm">(Engine displacement)</span>
          </div>
          <div className="text-left text-black w-full mt-1">
            Công suất lớn nhất/tốc độ quay:
            <span className="italic text-sm">(Max. output/rpm)</span>
          </div>
          <div className="text-left text-black w-full mt-1">
            <div>
              Số lượng lốp, cỡ lốp/trục:
              <span className="italic text-sm">
                (Number of Tires; Tire size/axle)
              </span>
            </div>
            <div>
              <div>dât1</div>
              <div>dât2</div>
            </div>
          </div>
          <div className="text-left text-black w-full mt-1">
            Có lắp thiết bị giám sát hành trình:
            <span className="italic text-sm">(Equipped with Tachography)</span>
            <span className="ms-4">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </span>
          </div>
          <div className="text-left text-black w-full mt-1">
            Không cấp tem kiểm định
            <span className="italic text-sm">(Inspection Stamp was not issued)</span>
            <span className="ms-4">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </span>
          </div>

          <div className="container flex flex-wrap mx-auto items-center pt-3">
            <div className="flex-initial w-1/3 pt-5">
              <div className="text-left text-black w-full mt-1">
                Số phiếu kiểm định:
              </div>
              <div className="italic text-sm text-black">
                (Inspection Report No)
              </div>
              <div className="text-black text-left"> data</div>
              <div className="text-left text-black w-full mt-1">
                Có hiệu lực đến hết ngày:
              </div>
              <div className="italic text-sm text-black">
                (Valid Until)
                <span className="text-black text-left"> data</span>
              </div>
            </div>
            <div className="flex-initial w-2/3">
              <div className="text-center text-black w-full mt-1">
                Hà Nội, ngày ... tháng ... năm
              </div>
              <div className="italic text-sm text-black text-center">
                (Issue on Date/Month/Year)
              </div>
              <div>
                <h3 className="font-medium title-font text-center text-black">
                  ĐƠN VỊ KIỂM ĐỊNH
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
