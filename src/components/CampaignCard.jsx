"use client";

const CampaignCard = ({ campaign, onViewRules }) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="text-sm leading-5 font-medium text-gray-900">
          {campaign.campaignName}
        </div>
        <div className="text-sm leading-5 text-gray-500">
          Created At: {new Date(campaign.createdAt).toLocaleString()}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="text-sm leading-5 text-gray-900">
          {campaign.campaignMessage}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="text-sm leading-5 text-gray-900">
          Total: {campaign.audienceSize}
        </div>
        <div className="text-sm leading-5 text-green-600">
          Sent: {campaign.sentCount}
        </div>
        <div className="text-sm leading-5 text-red-600">
          Failed: {campaign.failedCount}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
            campaign.deliveryStatus === "Pending"
              ? "bg-yellow-900 text-yellow-300"
              : campaign.deliveryStatus === "Completed"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {campaign.sentCount} | {campaign.failedCount}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right text-sm leading-5 font-medium">
        <button
          onClick={() => onViewRules(campaign.audienceRules)}
          className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"
        >
          View Rules
        </button>
      </td>
    </tr>
  );
};

export default CampaignCard;
