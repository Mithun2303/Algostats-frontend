import { Link, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "./components/ui/button"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./components/ui/table"

function Leaderboard() {
    const [response, setResponse] = useState([]);
    const navigate = useNavigate();
    const getLeaderboard = async () => {
        const resp = await axios.get(`http://localhost:3000/api/leaderboard/`);
        setResponse(resp.data);
        console.log(resp.data);
    }
    useEffect(() => {
        getLeaderboard();
    }, []);

    const renderRow = (elt, idx) => {
        return (
                <TableRow className={`${idx % 2 == 0 ? " hover:bg-[#363636]" : "hover:bg-[#2b2b2b]"}  `} onClick={()=>navigate(`/u/${elt.id}`)}>
                    <TableCell className="text-center">{idx + 1}</TableCell>
                    <TableCell className="text-center">{elt.id}</TableCell>
                    <TableCell className="text-center">{elt.class}</TableCell>
                    <TableCell className="text-center">{elt.score}</TableCell>
                    <TableCell className="text-center">{elt.stream}</TableCell>
                    <TableCell className="text-center">{elt.batch}</TableCell>
                </TableRow>)
    }
    return (
        <main className="p-12">
            <div className="text-3xl text-white font-bold p-4 md:mx-24">
                <span>Leaderboard - Applied Mathematics and Computational Sciences</span>
            </div>
            <div className="text-white h-[80vh] rounded-lg bg-[rgba(255,255,255,0.1)] p-4 shadow-2xl  backdrop-blur-2xl md:mx-30">
                <Table className="table-auto h-[10%]  w-full text-center">
                    <TableHeader>
                        <TableRow className="bg-[#001C2A] p-4">
                            <TableHead className="px-2 text-white  font-bold text-lg text-center">Position</TableHead>
                            <TableHead className="px-4 text-white  font-bold text-lg text-center">Roll Number</TableHead>
                            <TableHead className="px-4 text-white  font-bold text-lg text-center">Class</TableHead>
                            <TableHead className="px-4 text-white  font-bold text-lg text-center">Score</TableHead>
                            <TableHead className="px-4 text-white  font-bold text-lg text-center">Stream</TableHead>
                            <TableHead className="px-4 text-white  font-bold text-lg text-center">Batch</TableHead>
                        </TableRow>
                    </TableHeader>
                </Table>
                <div className="h-[90%] overflow-y-auto text-center"> {/* Set a max height for scrolling */}
                    <Table className="table-auto w-full text-center">
                        <TableBody>
                            {response.length !== 0 && response.map((elt, idx) => renderRow(elt, idx))}
                        </TableBody>
                    </Table>
                </div>

            </div>
        </main>
    )
}

export default Leaderboard
