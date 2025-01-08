import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function SearchForm({ onDataSend }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [saveQuery, setSaveQuery] = useState('');

    // 初回レンダリング時にクエリパラメータを初期化する
    useEffect(() => {
        setSaveQuery('');
        setSearchParams('');
    }, [])

    // フォームの入力内容を読み取り、記憶しておく関数
    function handleSaveInputValue(e) {
        const input = e.target.value;
        setSaveQuery(input);
    }

    // 入力された検索単語をクエリパラメータに追加する関数
    function handleAddQueryParam() {
        setSearchParams({ query: saveQuery });
        onDataSend(saveQuery);
        setSaveQuery('');
    }

    // エンターキーをクリックすることで検索ボタンを実行させる関数
    function clickEnter(e) {
        if (e.key === 'Enter') {
            console.log('Click Enter Key');
            e.preventDefault();
            handleAddQueryParam();
        }
    }

    return (
        <div className='position-fixed' style={{width: '100%', margin: '0 auto', backgroundColor: '#ffffff'}}>
            <div className='d-flex' style={{ width: "300px", padding: '20px' }}>
                <Form.Control type="text" placeholder='Search' className='me-3 ' onKeyDown={clickEnter} value={saveQuery} onChange={handleSaveInputValue} />
                <Button variant="secondary" onClick={handleAddQueryParam}>Search</Button>
            </div>
        </div>
    );
}

export default SearchForm;