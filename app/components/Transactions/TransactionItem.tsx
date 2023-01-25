
export const TransactionItem = ({ transaction }: { transaction: any }) => {

    function limit(string = '', limit = 0) {
        return string.substring(0, limit)
    }

    const { createdAt } = transaction;

    const options = { year: 'numeric', month: 'long', day: 'numeric' } as const;
    const createdAtDate = new Date(createdAt);
    const createdAtDateFormatted = createdAtDate.toLocaleDateString("en-Us", options);

    return (
        <>
            <div className="grid grid-cols-4 justify-items-stretch justify-between items-center mb-3">
                <span className="font-semibold">{limit(transaction.userId, 10)}</span>
                <span className="font-semibold">{createdAtDateFormatted}</span>
                <span className="font-semibold">{`$${transaction.amount}`}</span>

                <div
                    className={
                        (transaction.status !== "pending")
                            ? "pl-3 pr-3 pt-1 pb-2 rounded-md bg-green-200 text-center font-semibold"
                            : "pl-4 pr-4 pt-1 pb-2 rounded-md bg-red-300 text-center font-semibold"
                    }
                >
                    {(transaction.status !== "pending") ? "Approved" : "Pending"}
                </div>
            </div>
        </>
    );
};