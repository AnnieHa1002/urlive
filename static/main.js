
  //댓글 보이기
    function comment_listing() {
        $.ajax({
            type: 'GET',
            url: '/untitlesd',
            data: {},
            success: function (response) {
                let rows = response['lives_comment']
                for (let i = 0; i < rows.length; i++) {
                    let comment = rows[i]['comment']
                    let username = rows[i]['username']
                    let temp_html = ` <tr>
                                        <td>${username}</td>
                                        <td>${comment}</td>
                                    </tr>`
                    $('#comment').append(temp_html)
                }
            }
        })
    }

      //포스트 창 열기 (수정 필요)
    function post_page_open(int) {
        $.ajax({
            type: 'GET',
            url: '/untitlesd',
            data: {},
            success: function (response) {
                let rows = response['lives']
                let i = response['lives'][int]
                let url = [rows][i]['url']
                let song_name=[rows]['songname']
                let artist = [rows]['artist']
                let recommendation = [rows]['recommendation']
                let temp_html = ` <div class="embed-responsive embed-responsive-16by9 m-3">
                                        <iframe width="560" height="315" src="${url}"
                                                title="YouTube video player" frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowfullscreen></iframe>
                                    </div>
                                    <h2>${song_name} - ${artist}</h2>
                                    <div>${recommendation}</div>`
                $('#post-box').append(temp_html)
            }
        })
    }

    //댓글 하기
    function comment_posting() {
        let comment = $('#comment').val()
        let username =
        $.ajax({
            type: 'POST',
            url: '/untitlesd',
            data: {url_give: url, comment_give: comment},
            success: function (response) {
                alert(response['msg'])
                window.location.reload()
            }
        });
    }

