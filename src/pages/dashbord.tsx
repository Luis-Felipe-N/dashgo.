import dynamic from "next/dynamic";
import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Header } from "../components/Header";
import SideBar from "../components/SideBar";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import('react-apexcharts'),{
    ssr: false
})
const options: ApexOptions = {
    colors: [theme.colors.pink[500]],
    chart: {
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      },
      foreColor: theme.colors.gray[500]
    },
    grid: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    tooltip: {
      enabled: false
    },
    xaxis: {
      type: "datetime",
      axisBorder: {
        color: theme.colors.gray[600]
      },
      axisTicks: {
        color: theme.colors.gray[600]
      },
      categories: [
        "2021-03-18T00:00:00.000Z",
        "2021-03-19T00:00:00.000Z",
        "2021-03-20T00:00:00.000Z",
        "2021-03-21T00:00:00.000Z",
        "2021-03-22T00:00:00.000Z",
        "2021-03-23T00:00:00.000Z",
        "2021-03-24T00:00:00.000Z"
      ]
    },
    fill: {
      opacity: 0.3,
      type: "gradient",
      gradient: {
        shade: "dark",
        opacityFrom: 0.7,
        opacityTo: 0.3
      }
    }
  };
  
  const series = [{ name: "series1", data: [31, 120, 10, 28, 51, 18, 109] }];

export default function Dashbord() {
    return (
        <Flex flexDir="column">
            <Header />
            <Flex
                maxW={1480}
                w="100%"
                mx="auto"
                my="6"
                px={6}
            >
                <SideBar />
                <SimpleGrid flex="1" gap="4" minChildWidth={330}>
                    <Box
                        bg="gray.800"
                        p={["4", "8"]}
                        pb="4"
                        borderRadius={8}
                    >
                        <Text>Inscritos da Semana</Text>
                        <Chart
                            type="area"
                            options={options}
                            series={series}
                            height={160}
                        />
                    </Box>
                    <Box
                        bg="gray.800"
                        p={["4", "8"]}
                        pb="4"
                        borderRadius={8}
                    >
                        <Text>Taxa de abertura</Text>
                        <Chart
                            type="area"
                            options={options}
                            series={series}
                            height={160}
                        />
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}