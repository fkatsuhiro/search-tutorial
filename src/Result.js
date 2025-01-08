import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function Result(props) {
    const [datas, setDatas] = useState([]);
    const [filteredDatas, setFilteredDatas] = useState([]);

    // 初回マウント時にデータを取得する
    useEffect(() => {
        fetch('data.json', { method: 'GET' })
            .then(res => res.json())
            .then(data => {
                setDatas(data);
            })
            .catch(error => console.error('データ取得時エラー:', error));
    }, []);

    // クエリパラメータの変更を監視して、変更が加えられた場合に検索結果を返す
    useEffect(() => {
        if (props.saveQuery) {
            const filtered = datas.filter((item) =>
                item.title.toLowerCase().includes(props.saveQuery.toLowerCase()) ||
                item.content.toLowerCase().includes(props.saveQuery.toLowerCase())
            );
            setFilteredDatas(filtered);
        }
    }, [props.saveQuery, datas]);

    return (
        <div>
            {filteredDatas.length > 0 &&
                <>
                    <h4>{props.saveQuery}の検索結果</h4>
                    <Table striped hover style={{ width: '100%', margin: '0 auto' }} className='mt-3' >
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Title</th>
                                <th>Content</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filteredDatas.map(filteredData => (
                                    <tr key={filteredData.id}>
                                        <td>{filteredData.id}</td>
                                        <td>{filteredData.title}</td>
                                        <td>{filteredData.content}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </>
            }
            {filteredDatas.length === 0 && <h4>検索結果がありません。</h4>}
        </div>
    );
}

export default Result;