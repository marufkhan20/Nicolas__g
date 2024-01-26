import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaFilePdf } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDeleteCreditCardMutation } from "../../../app/features/creditCard/creditCardApi";
import Loading from "../../../components/shared/Loading";
import Table from "../../../components/shared/Table";

const CreditCard = ({ creditCards, isLoading, refetch }) => {
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");
  const [pages, setPages] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (creditCards?.length > 0) {
      // calculate pages
      const totalPages = Math.ceil(creditCards?.length / limit);
      if (totalPages) {
        setPages(totalPages);
      } else {
        setPages(1);
      }
    }
  }, [creditCards, limit]);

  useEffect(() => {
    setPage(1);
  }, [limit]);

  // delete credit card
  const [deleteCreditCard, { data: deletedCreditCard, isLoading: loading }] =
    useDeleteCreditCardMutation();

  useEffect(() => {
    if (!loading && deletedCreditCard?._id) {
      refetch();
      toast.success("Credit card deleted successfully.");
    }
  }, [deletedCreditCard, loading, refetch]);
  return (
    <Table
      headers={[
        "No.",
        "Arqn Name",
        "Notice Balance",
        "Maskcard",
        "Date",
        "Action",
      ]}
      cols="grid-cols-6"
      isLoading={isLoading}
      limit={limit}
      setLimit={setLimit}
      search={search}
      setSearch={setSearch}
      pages={pages}
      setPage={setPage}
      page={page}
      totalItems={creditCards?.length}
    >
      {creditCards
        ?.slice(page * limit - limit, limit * page)
        .filter((item) =>
          item?.custName?.toLowerCase()?.includes(search?.toLowerCase())
        )
        .map((creditCard, idx) => (
          <>
            <span className="py-3 pl-4">{idx + 1}</span>
            <span className="py-3">{creditCard?.custName}</span>
            <span className="py-3">{creditCard?.noticeBalance}</span>
            <span className="py-3">{creditCard?.maskNo}</span>
            <span className="py-3">
              {creditCard?.campDate?.replace(".", "-")}
            </span>
            <div className="py-3 pr-4 flex items-center gap-2">
              <Link
                to={`/forms/credit-card/edit-credit-card/${creditCard?._id}`}
                className="rounded py-[6px] px-2 bg-primary text-white cursor-pointer"
              >
                <MdEdit />
              </Link>
              <button
                className="rounded py-[6px] px-2 bg-red-500 text-white cursor-pointer"
                onClick={() => deleteCreditCard(creditCard?._id)}
              >
                {loading ? <Loading className="w-4 h-4" /> : <MdDelete />}
              </button>
              <a
                to={`${process.env.REACT_APP_API_URL}${creditCard?.pdfLink}`}
                target="_blank"
                rel="noreferrer"
              >
                <FaFilePdf />
              </a>
            </div>
          </>
        ))}
    </Table>
  );
};

export default CreditCard;
