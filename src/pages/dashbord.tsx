import dynamic from "next/dynamic";
import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Header } from "../components/Header";
import SideBar from "../components/SideBar";

const Chart = dynamic(() => import('react-apexcharts'),{
    ssr: false
})

const options = {
    xaxis: {
        type: "datetime",
        categories: [
            '2022-07-14T00:00:00.000Z',
            '2022-07-15T00:00:00.000Z',
            '2022-07-16T00:00:00.000Z',
            '2022-07-17T00:00:00.000Z',
            '2022-07-18T00:00:00.000Z',
            '2022-07-19T00:00:00.000Z',
            '2022-07-20T00:00:00.000Z',
        ],
        axisTicks: {
            color: theme.colors.gray[600]
        },
        axisBorder: {
            color: theme.colors.gray[600]
        }
    },
    tooltip: {
        enabled: false
    },
    grid: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    chart: {
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        foreColor: theme.colors.gray[500]
    }
}

const series = [
    {
        name: 'incritos',
        data: ['1', '45', '87', '78', '2', '12', '100']
    }
]

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
                        p="8"
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
                        p="8"
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