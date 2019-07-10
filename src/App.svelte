<script>
	let likes = 600
	let follows = 203
	let posts = 5
	let replies = 19
	let comments = 20

	$: growth = ((likes * 0.6) - (follows * 0.01) + (posts * 0.2) + (replies * 0.2) + (comments * 0.02)) / 100
	$: dailyGrowth = (likes * 0.035) + (follows * 0.01) + (posts * 0.01) + (replies * 0.01) + (comments * 0.01)
</script>

<main>
	<div class="inputs">
		<h1>Instagram Engagement</h1>

		<div class="form-group">
			<label for="likes">Likes (Daily)</label>
			<div class="slider">
				<input type="number" id="likes" bind:value="{likes}" min="0" max="600">
				<input type="range" bind:value="{likes}" min="0" max="600">
			</div>
		</div>

		<div class="form-group">
			<label for="follows">Follows (Daily)</label>
			<div class="slider">
				<input type="number" id="follows" bind:value="{follows}" min="0" max="300">
				<input type="range" bind:value="{follows}" min="0" max="300">
			</div>
		</div>

		<div class="form-group">
			<label for="posts">Posts (Daily)</label>
			<div class="slider">
				<input type="number" id="posts" bind:value="{posts}" min="0" max="10">
				<input type="range" bind:value="{posts}" min="0" max="10">
			</div>
		</div>

		<div class="form-group">
			<label for="replies">Comment Replies (Daily)</label>
			<div class="slider">
				<input type="number" id="replies" bind:value="{replies}" min="0" max="20">
				<input type="range" bind:value="{replies}" min="0" max="20">
			</div>
		</div>

		<div class="form-group">
			<label for="comments">Comments (Daily)</label>
			<div class="slider">
				<input type="number" id="comments" bind:value="{comments}" min="0" max="20">
				<input type="range" bind:value="{comments}" min="0" max="20">
			</div>
		</div>
	</div>

	<div class="output">
		<table>
			<thead>
				<tr>
					<td>Engagement Rate</td>
					<td>New Followers<br>(Daily)</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="blue">{growth.toFixed(2)}%</td>
					<td class="pink">{dailyGrowth.toFixed(0)}</td>
				</tr>
			</tbody>
		</table>
	</div>
</main>
