<script>
	// Default values
	let likes = 600
	let follows = 203
	let posts = 5
	let replies = 19
	let comments = 20

	$: growth = ((likes * 0.6) - (follows * 0.01) + (posts * 0.2) + (replies * 0.2) + (comments * 0.02)) / 100
	$: dailyGrowth = (likes * 0.035) + (follows * 0.01) + (posts * 0.01) + (replies * 0.01) + (comments * 0.01)
</script>

<div class="ec-sliders">
	<div class="ec-slider-group">
		<label class="ec-slider-label" for="likes">Likes (Daily)</label>
		<div class="ec-slider-inputs">
			<input class="ec-slider-number" type="number" id="likes" bind:value="{likes}" min="0" max="600">
			<input class="ec-slider-range" type="range" bind:value="{likes}" min="0" max="600">
		</div>
	</div>

	<div class="ec-slider-group">
		<label class="ec-slider-label" for="follows">Follows (Daily)</label>
		<div class="ec-slider-inputs">
			<input class="ec-slider-number" type="number" id="follows" bind:value="{follows}" min="0" max="300">
			<input class="ec-slider-range" type="range" bind:value="{follows}" min="0" max="300">
		</div>
	</div>

	<div class="ec-slider-group">
		<label class="ec-slider-label" for="posts">Posts (Daily)</label>
		<div class="ec-slider-inputs">
			<input class="ec-slider-number" type="number" id="posts" bind:value="{posts}" min="0" max="10">
			<input class="ec-slider-range" type="range" bind:value="{posts}" min="0" max="10">
		</div>
	</div>

	<div class="ec-slider-group">
		<label class="ec-slider-label" for="replies">Comment Replies (Daily)</label>
		<div class="ec-slider-inputs">
			<input class="ec-slider-number" type="number" id="replies" bind:value="{replies}" min="0" max="20">
			<input class="ec-slider-range" type="range" bind:value="{replies}" min="0" max="20">
		</div>
	</div>

	<div class="ec-slider-group">
		<label class="ec-slider-label" for="comments">Comments (Daily)</label>
		<div class="ec-slider-inputs">
			<input class="ec-slider-number" type="number" id="comments" bind:value="{comments}" min="0" max="20">
			<input class="ec-slider-range" type="range" bind:value="{comments}" min="0" max="20">
		</div>
	</div>
</div>

<div class="ec-result">
	<table>
		<thead>
			<tr>
				<td>Engagement Rate</td>
				<td>New Followers<br>(Daily)</td>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td class="ec-result-growth">{growth.toFixed(2)}%</td>
				<td class="ec-result-daily-growth">{dailyGrowth.toFixed(0)}</td>
			</tr>
		</tbody>
	</table>
</div>
