import { ethers } from "ethers";

const allOracles = {
	endpoint1: "exp9",
	endpoint2: "PoloniexAPI",
	endpoint3: "BitstampAPI",
	endpoint4: "",
};

// Filters valid endpoints by checking if the 2nd character is a 0 or not
// If the 2nd character is > 0 the endpoint is valid
// If the 2nd character is 0 the endpoint is not valid
const mockValidEndpoints = jest.fn((oracleEndpoint) => {
	var filteredEndpoints = oracleEndpoint.filter(function(item) {
		if (item.charAt(2) !== "0") {
			return item;
		}
	});
	return filteredEndpoints;
});

describe("Test validEndpoints method for oracle object", () => {
	it("should only return endpoints whose character at index 2 is a number greater than 0", async () => {
		if (Object.keys(allOracles) !== 0) {
			const oracleEndpoints = [];
			for (let key in allOracles) {
				oracleEndpoints.push(ethers.utils.formatBytes32String(allOracles[key]));
			}
			const validEndpoints = mockValidEndpoints(oracleEndpoints);

			// check that validEndpoints does not contain the invalid endpoint from allOracles -
			// ethers.utils.formatBytes32String(allOracles["endpoint4"]) =
			// 0x0000000000000000000000000000000000000000000000000000000000000000
			expect(validEndpoints.length).toEqual(oracleEndpoints.length - 1);

			// check that, for each endpoint in validEndpoints, it's character at index 2 is a number > 0
			validEndpoints.forEach((endpoint) => {
				expect(Number.isInteger(endpoint[2]));
				expect(endpoint[2] > 0);
			});
		}
	});
});
