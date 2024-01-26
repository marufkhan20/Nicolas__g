import moment from "moment";
import { useGetDashboardInfoQuery } from "../app/features/dashboard/dashboard";
import DashboardLayout from "../components/shared/DashboardLayout";
import Loading from "../components/shared/Loading";

const headers = ["Serial", "Name", "Date", "Status"];

export default function Home() {
  const { data: dashbaordInfo, isLoading } = useGetDashboardInfoQuery();
  return (
    <DashboardLayout>
      {isLoading ? (
        <Loading type="secondary" />
      ) : (
        <>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-7">
            <div className="py-10 rounded-md bg-[#E6FFFA] flex items-center justify-center flex-col gap-2 px-2 text-center">
              <h3 className="text-sm font-semibold text-[#13deb9]">
                Credit Cards
              </h3>
              <h3 className="text-lg text-[#13deb9] font-semibold">
                {dashbaordInfo?.totalCreditCards}
              </h3>
            </div>
            <div className="py-10 rounded-md bg-[#FBF2EF] flex items-center justify-center flex-col gap-2 px-2 text-center">
              <h3 className="text-sm font-semibold text-[#fa896b]">Notices</h3>
              <h3 className="text-lg text-[#fa896b] font-semibold">
                {dashbaordInfo?.totalNotices}
              </h3>
            </div>
            <div className="py-10 rounded-md bg-[#EBF3FE] flex items-center justify-center flex-col gap-2 px-2 text-center">
              <h3 className="text-sm font-semibold text-[#539bff]">
                Credit Card Campaigns
              </h3>
              <h3 className="text-lg text-[#539bff] font-semibold">
                {dashbaordInfo?.totalCreditCardCampaigns}
              </h3>
            </div>
            <div className="py-10 rounded-md bg-[#FEF5E5] flex items-center justify-center flex-col gap-2 px-2 text-center">
              <h3 className="text-sm font-semibold text-[#ffae1f]">
                Notice Campaigns
              </h3>
              <h3 className="text-lg text-[#ffae1f] font-semibold">
                {dashbaordInfo?.totalNoticeCampaigns}
              </h3>
            </div>
          </div>

          <div className="mt-10 box-shadow rounded-xl pb-5 overflow-hidden">
            <div className="p-5 border-b flex items-center gap-5 flex-wrap justify-between">
              <h3 className="text-lg">Mails Details</h3>
            </div>
            <div className="overflow-auto">
              <div
                className={`min-w-[1100px] m-5 bg-white rounded box-shadow grid grid-cols-4`}
              >
                {headers?.map((header, idx) => (
                  <span
                    key={header}
                    className={`font-semibold py-3 border-b ${
                      idx === 0 && "pl-4"
                    } ${idx + 1 === headers?.length && "pr-4"}`}
                  >
                    {header}
                  </span>
                ))}

                {dashbaordInfo?.mailInfo?.map((mail, idx) => (
                  <>
                    <span className="py-3 pl-4">{idx + 1}</span>
                    <span className="py-3">{mail?.name}</span>
                    <span className="py-3">
                      {moment(new Date(mail?.date)).format("MMM Do YY")}
                    </span>
                    <span
                      className={`py-3 ${
                        mail?.status === "success"
                          ? "text-primary"
                          : "text-red-700"
                      }`}
                    >
                      {mail?.status}
                    </span>
                  </>
                ))}
              </div>
            </div>

            {dashbaordInfo?.mailInfo?.length === 0 && (
              <span className="px-5">No Mail Details Found!!</span>
            )}
          </div>
        </>
      )}
    </DashboardLayout>
  );
}
