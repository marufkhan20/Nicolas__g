import moment from "moment";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetCampaignsQuery } from "../../../app/features/campaign/campaignApi";
import DashboardLayout from "../../../components/shared/DashboardLayout";
import Table from "../../../components/shared/Table";

const CreditCards = () => {
  // get credit card campaign
  const { data: campaigns, isLoading } = useGetCampaignsQuery("credit-card");

  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");
  const [pages, setPages] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (campaigns?.length > 0) {
      // calculate pages
      const totalPages = Math.ceil(campaigns?.length / limit);
      if (totalPages) {
        setPages(totalPages);
      } else {
        setPages(1);
      }
    }
  }, [campaigns, limit]);

  useEffect(() => {
    setPage(1);
  }, [limit]);
  return (
    <DashboardLayout>
      <Table
        headers={["No.", "History Name", "Imported At"]}
        cols="grid-cols-3"
        isLoading={isLoading}
        limit={limit}
        setLimit={setLimit}
        search={search}
        setSearch={setSearch}
        pages={pages}
        setPage={setPage}
        page={page}
        totalItems={campaigns?.length}
      >
        {campaigns
          ?.slice(page * limit - limit, limit * page)
          .filter((item) =>
            item?.name?.toLowerCase()?.includes(search?.toLowerCase())
          )
          .map((campaign, idx) => (
            <>
              <span className="py-3 pl-4">{idx + 1}</span>
              <Link
                to={`/campaign/credit-card/${campaign?._id}`}
                className="py-3 transition-all hover:text-primary"
              >
                {campaign?.name}
              </Link>
              <span className="py-3">
                {moment(new Date(campaign?.date)).format("MMM Do YY")}
              </span>
            </>
          ))}
      </Table>
    </DashboardLayout>
  );
};

export default CreditCards;
